import ts, { Node } from "typescript";

export function infferClass(sourceCode: string, targetClassName = "boostest") {
  const fileName = "example.ts";

  const sourceFile = ts.createSourceFile(
    fileName,
    sourceCode,
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

  let updatedSourceCode = "";

  function getTypeStructure(type: any): string {
    const isObjectType = (type: any) =>
      (type.flags & ts.TypeFlags.Object) !== 0;

    if (type.isUnion()) {
      return type.types.map((t: any) => getTypeStructure(t)).join(" | ");
    } else if (type.isIntersection()) {
      return type.types.map((t: any) => getTypeStructure(t)).join(" & ");
    } else if (isObjectType(type)) {
      const result = [];
      for (const prop of type.getProperties()) {
        const propType = checker.getTypeOfSymbol(prop);
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
      ts.isClassDeclaration(node) &&
      node.name?.getText().includes(targetClassName)
    ) {
      const constructor = node.members.find(ts.isConstructorDeclaration);

      if (constructor && ts.isConstructorDeclaration(constructor)) {
        const newParameters = constructor.parameters.map((param) => {
          const paramName = param.name.getText();
          const paramType = param.type
            ? checker.getTypeAtLocation(param.type)
            : undefined;
          const resolvedType = paramType
            ? getTypeStructure(paramType)
            : "unknown";
          return `public ${paramName}: ${resolvedType}`;
        });

        const constructorStart = constructor.getStart();
        const constructorEnd = constructor.getEnd();
        const newConstructorContent = `constructor(\n    ${newParameters.join(
          ",\n    ",
        )}\n  )`;

        const classStart = node.getStart();
        const classEnd = node.getEnd();

        updatedSourceCode =
          sourceCode.slice(classStart, constructorStart) +
          newConstructorContent +
          sourceCode.slice(constructorEnd, classEnd);
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  return updatedSourceCode;
}
