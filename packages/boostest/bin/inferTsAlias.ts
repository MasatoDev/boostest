import ts, { Node } from "typescript";

const typeCache = new Map<ts.Type, string>();
const nodeCache = new Map<ts.Node, string | undefined>();

// __@ts-alias@1, __@toPrimitive@2, __@ts-alias@3
const SymbolRegex = /__@[^@]+@\d+/g; // gフラグで全体検索

/*******************************************/
/*******************************************/
/***********  inferTsAlias  ****************/
/*******************************************/
/*******************************************/
export function inferTsAlias(sourceCode: string) {
  // console.log("📝📝📝📝📝📝📝\n", sourceCode);
  const code = removeDuplicateDeclarations(sourceCode);

  const fileName = "example.ts";
  const sourceFile = ts.createSourceFile(
    fileName,
    code,
    ts.ScriptTarget.Latest,
    true,
  );
  const host = ts.createCompilerHost({});
  host.getSourceFile = (fileName) =>
    fileName === "example.ts" ? sourceFile : undefined;

  const program = ts.createProgram(
    [fileName],
    {
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.CommonJS,
      preserveSymlinks: true,
    },
    host,
  );

  const checker = program.getTypeChecker();

  const boostestTypes: any[] = [];

  function visit(node: Node) {
    if (
      ts.isTypeAliasDeclaration(node) &&
      node.name.getText().includes("main")
    ) {
      const aliasName = node.name.getText();

      let structure: string | undefined;

      structure = getTextFromNode(checker, node.type, true);

      const type = checker.getTypeAtLocation(node.type);
      if (!structure) {
        structure = getTypeStructure(checker, type);
      }
      boostestTypes.push({
        type: "typeAlias",
        name: aliasName,
        structure: structure,
      });
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  const output = boostestTypes
    .map((t) => `type ${t.name}_output_target = ${t.structure};`)
    .join("\n");

  // console.log("🎉🎉🎉", `${output}\n\n${code}`);
  // console.log("🎉🎉🎉", `${output}\n`);
  return `${output}\n\n${code}`;
  // return `${output}`;
}

/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/***********        handle TYPE NODE       ****************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/

function getTextFromNode(
  checker: ts.TypeChecker,
  node: ts.Node,
  is_root: boolean = false,
  visitedTypes = new Set<ts.Type>(),
) {
  const cacheKey = node;

  if (nodeCache.has(cacheKey)) {
    return nodeCache.get(cacheKey);
  }
  const result = getTextFromNodeInner(checker, node, is_root, visitedTypes);
  nodeCache.set(cacheKey, result);
  return result;
}

function getTextFromNodeInner(
  checker: ts.TypeChecker,
  node: ts.Node,
  is_root: boolean = false,
  visitedTypes = new Set<ts.Type>(),
): string | undefined {
  if (ts.isPropertySignature(node)) {
    if (node.type) {
      return getTextFromNode(checker, node.type);
    }
  }

  if (ts.isMethodSignature(node)) {
    return checker.typeToString(checker.getTypeAtLocation(node));
  }

  if (node.kind == ts.SyntaxKind.FunctionType && !is_root) {
    return checker.typeToString(checker.getTypeAtLocation(node));
  }

  if (node.kind == ts.SyntaxKind.TypeReference) {
    if (node.getText().includes("Promise")) {
      const arg = (node as ts.TypeReferenceNode).typeArguments?.[0];

      if (!arg) return;
      const type = checker.getTypeFromTypeNode(arg);
      return `Promise<${getTypeStructure(checker, type, visitedTypes)}>`;
    }
  }

  // if (node.kind == ts.SyntaxKind.CallSignature) {
  //   const callSignature = node as ts.SignatureDeclaration;
  //
  //   // return checker.typeToString(checker.getTypeAtLocation(node));
  //
  //   // type && getTextFromNode(checker, type);
  // }
}

/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/***********         handle TYPE           ****************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/

function getTypeStructure(
  checker: ts.TypeChecker,
  type: ts.Type,
  visitedTypes = new Set<ts.Type>(),
) {
  // const cacheKey = `${type.symbol?.escapedName}_${type.flags}`;
  const cacheKey = type;
  if (typeCache.has(cacheKey)) {
    return typeCache.get(cacheKey);
  }

  let result = handleBuildIn(checker, type);
  if (!result) {
    result = getTypeStructureInner(checker, type, visitedTypes);
  }
  typeCache.set(cacheKey, result);

  return result;
}

function getTypeStructureInner(
  checker: ts.TypeChecker,
  type: ts.Type,
  visitedTypes = new Set<ts.Type>(),
): string {
  if (visitedTypes.has(type)) {
    return checker.typeToString(type);
  }
  visitedTypes.add(type);

  if (checker.typeToString(type).startsWith("Promise")) {
    const arg_type = type.aliasTypeArguments?.[0];
    if (arg_type) {
      return `Promise<${getTypeStructure(checker, arg_type, visitedTypes)}>`;
    }
  }

  if (isConstructorType(type)) {
    // typeofの場合
    const instanceType = checker.getReturnTypeOfSignature(
      type.getConstructSignatures()[0],
    );
    const className = checker.typeToString(instanceType);
    return `["classTypeofReference", ${className}]`;
  } else if (isClassType(type)) {
    // Classの場合
    const className = checker.typeToString(type);
    const classSymbol = type.getSymbol();
    const declarations = classSymbol?.getDeclarations();
    const classDeclaration = declarations?.find(ts.isClassDeclaration);

    let constructorArgTypes: string[] = [];

    if (classDeclaration) {
      const constructor = classDeclaration.members.find(
        ts.isConstructorDeclaration,
      );
      if (constructor) {
        constructor.parameters.forEach((param) => {
          let paramStructure;

          if (param) {
            const result = getTextFromNode(checker, param, false, visitedTypes);
            result && (paramStructure = result);
          }

          if (!paramStructure) {
            const paramType = checker.getTypeAtLocation(param);
            paramStructure = getTypeStructure(checker, paramType, visitedTypes);
          }

          constructorArgTypes.push(paramStructure!);
        });
      }
    }

    return `["classReference", ${className}, [ ${constructorArgTypes.join(
      ",\n  ",
    )}]]`;
  } else if (type.isUnion()) {
    return type.types
      .map((t) => getTypeStructure(checker, t, visitedTypes))
      .join(" | ");
  } else if (type.isIntersection()) {
    return type.types
      .map((t) => getTypeStructure(checker, t, visitedTypes))
      .join(" & ");
  }
  // else if (checker.isTupleType(type)) {
  //   return checker.typeToString(type);
  // }
  else if (isObjectType(type)) {
    const result = [];
    // string index type / number index type
    const indexInfos = checker.getIndexInfosOfType(type);

    const indexSignatures = indexInfos.map((indexInfo) => {
      const keyFlag = indexInfo.keyType.flags;

      const keyType =
        keyFlag & ts.TypeFlags.Number
          ? "number"
          : keyFlag & ts.TypeFlags.String
            ? "string"
            : "symbol";

      const valueType = getTypeStructure(checker, indexInfo.type, visitedTypes);
      return `[key: ${keyType}]: ${valueType}`;
    });

    result.push(...indexSignatures);

    // interface Hoge<K, V> {
    //   get(key: K): V | undefined;
    //   sampleFunc: (name: K) =>V
    //   sampleFunc2: (name: K, hoge: V) =>V
    //   hoge: K;
    // }
    for (const prop of type.getProperties()) {
      let propName = prop.name;

      if (propName.match(SymbolRegex)) {
        const cleanedText = propName.replace(/__|@/g, "");
        propName = cleanedText;
      }

      let propStructure;

      const propType = checker.getTypeOfSymbol(prop);
      const callSignatures = propType.getCallSignatures();

      if (callSignatures.length > 0) {
        let resultOfParams = "";

        let target = callSignatures[0];

        for (const param of target.parameters) {
          const propType = checker.getTypeOfSymbol(param);
          propStructure = getTypeStructure(checker, propType, visitedTypes);
          resultOfParams =
            (!!resultOfParams ? resultOfParams + ", " : "") +
            // `${param.getName()}: ${propStructure}`;
            `${param.getName()}: any`;
        }

        const returnType = target.getReturnType();
        const expandedReturnType = getTypeStructure(
          checker,
          returnType,
          visitedTypes,
        );
        propStructure = `(${resultOfParams}) => ${expandedReturnType}`;
      }

      if (!propStructure) {
        const propType = checker.getTypeOfSymbol(prop);
        propStructure = getTypeStructure(checker, propType, visitedTypes);
      }

      result.push(`${propName}: ${propStructure}`);
    }

    // call signature
    const callSignaturesResult = [];

    for (const signature of type.getCallSignatures()) {
      const parameters = signature.getParameters().map((param) => {
        const paramType = checker.getTypeOfSymbolAtLocation(
          param,
          param.valueDeclaration!,
        );
        const expandedParamType = getTypeStructure(
          checker,
          paramType,
          visitedTypes,
        );
        return `${param.getName()}: ${expandedParamType}`;
      });
      const returnType = checker.getReturnTypeOfSignature(signature);
      const expandedReturnType = getTypeStructure(
        checker,
        returnType,
        visitedTypes,
      );

      const decl = signature.getDeclaration();
      if (decl.kind === ts.SyntaxKind.CallSignature) {
        callSignaturesResult.push(
          `(${parameters.join(", ")}): ${expandedReturnType}`,
        );
      } else if (decl.kind === ts.SyntaxKind.FunctionType) {
        callSignaturesResult.push(
          `((${parameters.join(", ")}) => ${expandedReturnType})`,
        );
      }
    }

    if (result.length === 0 && callSignaturesResult.length === 1) {
      // When there is only one call signature, do not use {}.
      return `${callSignaturesResult.join("; ")}`;
    }

    return `{ ${[...result, ...callSignaturesResult].join("; ")} }`;
  } else {
    return checker.typeToString(type);
  }
}

/**********************************************************/
/**********************  utils  ***************************/
/**********************************************************/
function isClassType(type: ts.Type): boolean {
  const symbol = type.getSymbol();
  if (!symbol) return false;
  return symbol.getDeclarations()?.some(ts.isClassDeclaration) ?? false;
}

function isConstructorType(type: ts.Type): boolean {
  return (
    (type.getFlags() & ts.TypeFlags.Object) !== 0 &&
    type.getConstructSignatures().length > 0
  );
}

function isObjectType(type: ts.Type): boolean {
  return (type.flags & ts.TypeFlags.Object) !== 0;
}

/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/***********  removeDuplicateDeclarations  ****************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
/**********************************************************/
function removeDuplicateDeclarations(code: string) {
  const sourceFile = ts.createSourceFile(
    "temp.ts",
    code,
    ts.ScriptTarget.Latest,
    true,
  );

  const seenDeclarations = new Set(); // 重複チェック用のセット
  const uniqueStatements: Node[] = []; // ユニークなステートメントを保持

  // ASTノードを解析
  sourceFile.statements.forEach((node) => {
    if (ts.isTypeAliasDeclaration(node) || ts.isClassDeclaration(node)) {
      const key = node.getText(); // ノードの完全なテキストをキーとして保存
      if (!seenDeclarations.has(key)) {
        seenDeclarations.add(key);
        uniqueStatements.push(node);
      }
    } else {
      uniqueStatements.push(node); // その他のノードはそのまま追加
    }
  });

  // ユニークなコードに変換
  const printer = ts.createPrinter();
  const result = uniqueStatements
    .map((statement) =>
      printer.printNode(ts.EmitHint.Unspecified, statement, sourceFile),
    )
    .join("\n");

  return result;
}

// const code = `
// type main = Date;
// interface Date {
//   [Symbol.toPrimitive](hint: "default"): string;
//   [Symbol.toPrimitive](hint: "string"): string;
//   [Symbol.toPrimitive](hint: "number"): number;
//   toISOString(): string;
// }
// `;
// //
// console.log(inferTsAlias(code));
// //

function getBaseType(typeName: string): string {
  // 正規表現でジェネリクス部分を取り除く
  const match = typeName.match(/^([^\<]+)/); // "<"より前の部分を抽出
  return match ? match[1] : typeName; // マッチがなければそのまま返す
}

function handleBuildIn(checker: ts.TypeChecker, type: ts.Type) {
  const escapedName = type?.symbol?.escapedName;
  const originalTypeName = checker.typeToString(type);
  const typeName = escapedName ?? getBaseType(originalTypeName);

  switch (typeName) {
    case "Date":
    case "Set":
    case "Map":
    case "Error":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "BigInt64Array":
    case "BigUint64Array":
      return `["classReference", ${typeName}, []]`;

    case "RegExp":
      return `["classReference", ${typeName}, [""]]`;

    case "ArrayBuffer":
      return `["classReference", ArrayBuffer, [0]]`;

    case "String":
      return "string";
    case "Number":
      return "number";
    case "Boolean":
      return "boolean";

    case "Array":
    case "Symbol":
    case "Function":
    case "Object":
      return originalTypeName;

    // TODO:
    // case "DataView":
    //   return `["classReference", DataView, [["classReference", "ArrayBuffer", [0]]]`;
    // case "Atomics":
    //   return "Atomics";
    // case "WebAssembly":
    //   return "WebAssembly";

    default:
      return undefined;
  }
}
