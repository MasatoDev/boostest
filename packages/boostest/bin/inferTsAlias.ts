import ts, { Node } from "typescript";

const TypeOriginalFlag = {
  constructorSignature: "constructorSignature",
} as const;

/*******************************************/
/*******************************************/
/***********  inferTsAlias  ****************/
/*******************************************/
/*******************************************/
export function inferTsAlias(sourceCode: string) {
  const code = removeDuplicateDeclarations(sourceCode);
  // console.log("📝📝📝📝📝📝📝\n", code);

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

  visit(sourceFile);

  const output = boostestTypes
    .map(
      (t) =>
        `type ${t.name}_output_target = ${t.structure}; // Extracted from ${t.type}`,
    )
    .join("\n");

  // console.log("🎉🎉🎉", `${output}\n\n${code}`);
  return `${output}\n\n${code}`;
}

const code = `
type main = ref_7052f5ad147cf6c640250f802e053b8d2099b795026721497b6ccae657802322;
type ref_7052f5ad147cf6c640250f802e053b8d2099b795026721497b6ccae657802322 = {
    date: ref_eb519c0a0cb4206fe988fe6b8c679c9eaa7757bb3b7bae5aee9af83329e2df7a;
};

interface ref_eb519c0a0cb4206fe988fe6b8c679c9eaa7757bb3b7bae5aee9af83329e2df7a {
  /** Returns a string representation of a date. The format of the string depends on the locale. */
  toString(): string;
  /** Returns a date as a string value. */
  toDateString(): string;
  /** Returns a time as a string value. */
  toTimeString(): string;
  /** Returns a value as a string value appropriate to the host environment's current locale. */
  toLocaleString(): string;
  /** Returns a date as a string value appropriate to the host environment's current locale. */
  toLocaleDateString(): string;
  /** Returns a time as a string value appropriate to the host environment's current locale. */
  toLocaleTimeString(): string;
  /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
  valueOf(): number;
  /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
  getTime(): number;
  /** Gets the year, using local time. */
  getFullYear(): number;
  /** Gets the year using Universal Coordinated Time (UTC). */
  getUTCFullYear(): number;
  /** Gets the month, using local time. */
  getMonth(): number;
  /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
  getUTCMonth(): number;
  /** Gets the day-of-the-month, using local time. */
  getDate(): number;
  /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
  getUTCDate(): number;
  /** Gets the day of the week, using local time. */
  getDay(): number;
  /** Gets the day of the week using Universal Coordinated Time (UTC). */
  getUTCDay(): number;
  /** Gets the hours in a date, using local time. */
  getHours(): number;
  /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
  getUTCHours(): number;
  /** Gets the minutes of a Date object, using local time. */
  getMinutes(): number;
  /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
  getUTCMinutes(): number;
  /** Gets the seconds of a Date object, using local time. */
  getSeconds(): number;
  /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
  getUTCSeconds(): number;
  /** Gets the milliseconds of a Date, using local time. */
  getMilliseconds(): number;
  /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
  getUTCMilliseconds(): number;
  /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
  getTimezoneOffset(): number;
  /**
   * Sets the date and time value in the Date object.
   * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
   */
  setTime(time: number): number;
  /**
   * Sets the milliseconds value in the Date object using local time.
   * @param ms A numeric value equal to the millisecond value.
   */
  setMilliseconds(ms: number): number;
  /**
   * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
   * @param ms A numeric value equal to the millisecond value.
   */
  setUTCMilliseconds(ms: number): number;
  /**
   * Sets the seconds value in the Date object using local time.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setSeconds(sec: number, ms?: number): number;
  /**
   * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setUTCSeconds(sec: number, ms?: number): number;
  /**
   * Sets the minutes value in the Date object using local time.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setMinutes(min: number, sec?: number, ms?: number): number;
  /**
   * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setUTCMinutes(min: number, sec?: number, ms?: number): number;
  /**
   * Sets the hour value in the Date object using local time.
   * @param hours A numeric value equal to the hours value.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setHours(hours: number, min?: number, sec?: number, ms?: number): number;
  /**
   * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
   * @param hours A numeric value equal to the hours value.
   * @param min A numeric value equal to the minutes value.
   * @param sec A numeric value equal to the seconds value.
   * @param ms A numeric value equal to the milliseconds value.
   */
  setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
  /**
   * Sets the numeric day-of-the-month value of the Date object using local time.
   * @param date A numeric value equal to the day of the month.
   */
  setDate(date: number): number;
  /**
   * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
   * @param date A numeric value equal to the day of the month.
   */
  setUTCDate(date: number): number;
  /**
   * Sets the month value in the Date object using local time.
   * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
   */
  setMonth(month: number, date?: number): number;
  /**
   * Sets the month value in the Date object using Universal Coordinated Time (UTC).
   * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
   * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
   */
  setUTCMonth(month: number, date?: number): number;
  /**
   * Sets the year of the Date object using local time.
   * @param year A numeric value for the year.
   * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
   * @param date A numeric value equal for the day of the month.
   */
  setFullYear(year: number, month?: number, date?: number): number;
  /**
   * Sets the year value in the Date object using Universal Coordinated Time (UTC).
   * @param year A numeric value equal to the year.
   * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
   * @param date A numeric value equal to the day of the month.
   */
  setUTCFullYear(year: number, month?: number, date?: number): number;
  /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
  toUTCString(): string;
  /** Returns a date as a string value in ISO format. */
  toISOString(): string;
  /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */
  toJSON(key?: any): string;
}
interface ref_eb519c0a0cb4206fe988fe6b8c679c9eaa7757bb3b7bae5aee9af83329e2df7a {
  /**
   * Converts a date and time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleString(
    locales?: string | Array<string>,
    options?: Intl.DateTimeFormatOptions,
  ): string;
  /**
   * Converts a date to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleDateString(
    locales?: string | Array<string>,
    options?: Intl.DateTimeFormatOptions,
  ): string;
  /**
   * Converts a time to a string by using the current or specified locale.
   * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
   * @param options An object that contains one or more properties that specify comparison options.
   */
  toLocaleTimeString(
    locales?: string | Array<string>,
    options?: Intl.DateTimeFormatOptions,
  ): string;
}
`;

// console.log("⭐⭐RESULE: \n", inferTsAlias(code));

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
      return `Promise<${getTypeStructure(checker, type)}>`;
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
  typeOriginalFlag?: typeof TypeOriginalFlag,
): string {
  if (checker.typeToString(type).startsWith("Promise")) {
    const arg_type = type.aliasTypeArguments?.[0];
    if (arg_type) {
      return `Promise<${getTypeStructure(checker, arg_type)}>`;
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
            const result = getTextFromNode(checker, param);
            result && (paramStructure = result);
          }

          if (!paramStructure) {
            const paramType = checker.getTypeAtLocation(param);
            paramStructure = getTypeStructure(checker, paramType);
          }

          constructorArgTypes.push(paramStructure);
        });
      }
    }

    return `["classReference", ${className}, [\n  ${constructorArgTypes.join(
      ",\n  ",
    )}\n]]`;
  } else if (type.isUnion()) {
    return type.types.map((t) => getTypeStructure(checker, t)).join(" | ");
  } else if (type.isIntersection()) {
    return type.types.map((t) => getTypeStructure(checker, t)).join(" & ");
  }
  // else if (checker.isTupleType(type)) {
  //   return checker.typeToString(type);
  // }
  else if (isObjectType(type)) {
    const result = [];

    // constructor signature
    // const constructSignatures = type
    //   .getConstructSignatures()
    //   .map((signature) => {
    //     const parameters = signature.getParameters().map((param) => {
    //       const paramType = checker.getTypeOfSymbolAtLocation(
    //         param,
    //         param.valueDeclaration!,
    //       );
    //       const expandedParamType = getTypeStructure(checker, paramType);
    //       return `${param.getName()}: ${expandedParamType}`;
    //     });
    //     const returnType = checker.getReturnTypeOfSignature(signature);
    //     const expandedReturnType = getTypeStructure(checker, returnType);
    //     return `new (${parameters.join(", ")}): ${expandedReturnType}`;
    //   });
    //
    // result.push(...constructSignatures);

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

      const valueType = getTypeStructure(checker, indexInfo.type);
      return `[key: ${keyType}]: ${valueType}`;
    });

    result.push(...indexSignatures);

    // properties
    for (const prop of type.getProperties()) {
      let propStructure;

      const declaration = prop.valueDeclaration || prop.declarations?.[0];

      if (declaration) {
        const result = getTextFromNode(checker, declaration);
        result && (propStructure = result);
      }

      if (!propStructure) {
        const propType = checker.getTypeOfSymbol(prop);
        propStructure = getTypeStructure(checker, propType);
      }
      result.push(`${prop.name}: ${propStructure}`);
    }

    // call signature
    const callSignaturesResult = [];
    for (const signature of type.getCallSignatures()) {
      const parameters = signature.getParameters().map((param) => {
        const paramType = checker.getTypeOfSymbolAtLocation(
          param,
          param.valueDeclaration!,
        );
        const expandedParamType = getTypeStructure(checker, paramType);
        return `${param.getName()}: ${expandedParamType}`;
      });
      const returnType = checker.getReturnTypeOfSignature(signature);
      const expandedReturnType = getTypeStructure(checker, returnType);

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
