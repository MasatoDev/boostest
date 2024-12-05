import ts, { Node } from "typescript";

export function infferTsAlias(sourceCode: string) {
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

  const boostestTypes: any[] = [];

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
      ts.isTypeAliasDeclaration(node) &&
      node.name.getText().includes("main")
    ) {
      const aliasName = node.name.getText();
      const type = checker.getTypeAtLocation(node);
      const properties = type.getProperties();
      const typeStructure: { [key: string]: string } = {};
      for (const prop of properties) {
        const declaration =
          prop.valueDeclaration || (prop.declarations && prop.declarations[0]);
        if (!declaration) continue;
        const propType = checker.getTypeOfSymbolAtLocation(prop, declaration);
        const propStructure = getTypeStructure(propType);
        if (propStructure) {
          typeStructure[prop.name] = propStructure;
        }
      }
      boostestTypes.push({
        type: "typeAlias",
        name: aliasName,
        structure: `{ ${Object.entries(typeStructure)
          .map(([key, value]) => `${key}: ${value}`)
          .join("; ")} }`,
      });
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  const output = boostestTypes
    .map(
      (t) =>
        `type ${t.name}Structure = ${t.structure}; // Extracted from ${t.type}`,
    )
    .join("\n");

  return output;
}
