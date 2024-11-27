import ts, { Node } from "typescript";
import { removeDuplicateDeclarations } from "./removeDeplicate";

export function inferTsAlias(sourceCode: string) {
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
    },
    host,
  );

  const checker = program.getTypeChecker();

  const boostestTypes: any[] = [];

  function getTypeStructure(type: ts.Type): string {
    const isObjectType = (type: ts.Type) =>
      (type.flags & ts.TypeFlags.Object) !== 0;

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
            const paramType = checker.getTypeAtLocation(param);
            const paramStructure = getTypeStructure(paramType);
            constructorArgTypes.push(paramStructure);
          });
        }
      }

      return `["classReference", ${className}, [\n  ${constructorArgTypes.join(
        ",\n  ",
      )}\n]]`;
    } else if (type.isUnion()) {
      return type.types.map((t) => getTypeStructure(t)).join(" | ");
    } else if (type.isIntersection()) {
      return type.types.map((t) => getTypeStructure(t)).join(" & ");
    } else if (isObjectType(type)) {
      const result = [];
      for (const prop of type.getProperties()) {
        // const declaration = prop.valueDeclaration || prop.declarations?.[0];
        // if (!declaration) continue;
        const propType = checker.getTypeOfSymbol(prop);

        // const propType = checker.getTypeOfSymbolAtLocation(prop, declaration);
        const propStructure = getTypeStructure(propType);
        result.push(`${prop.name}: ${propStructure}`);
      }
      return `{ ${result.join("; ")} }`;
    } else {
      return checker.typeToString(type);
    }
  }

  function visit(node: Node) {
    if (
      ts.isTypeAliasDeclaration(node) &&
      node.name.getText().includes("main")
    ) {
      const aliasName = node.name.getText();
      const type = checker.getTypeAtLocation(node.type);

      let structure: string;

      if (isClassType(type)) {
        // クラス参照の場合
        structure = getTypeStructure(type);
      } else if (isConstructorType(type)) {
        // typeofクラス参照の場合
        structure = getTypeStructure(type);
      } else {
        // その他の型
        const typeStructure = getTypeStructure(type);
        structure = typeStructure;
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
    .map((t) => `type ${t.name} = ${t.structure}; // Extracted from ${t.type}`)
    .join("\n");

  return output;
}
