import ts, { Node } from "typescript";

export function infferTsInterface(sourceCode: string) {
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

  const boostestInterfaces: any[] = [];

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
      ts.isInterfaceDeclaration(node) &&
      node.name.getText().includes("boostest")
    ) {
      const interfaceName = node.name.getText();
      const members = node.members.map((member: any) => {
        if (ts.isPropertySignature(member)) {
          // プロパティの解析
          const propName = member.name.getText();
          const propType = member.type
            ? checker.getTypeAtLocation(member.type)
            : undefined;
          const propStructure = propType
            ? getTypeStructure(propType)
            : "unknown";
          return `${propName}: ${propStructure}`;
        } else if (ts.isCallSignatureDeclaration(member)) {
          // コールシグネチャの解析
          const params = member.parameters.map((param) => {
            const paramName = param.name.getText();
            const paramType = param.type
              ? checker.getTypeAtLocation(param.type)
              : undefined;
            const paramStructure = paramType
              ? getTypeStructure(paramType)
              : "unknown";
            return `${paramName}: ${paramStructure}`;
          });
          const returnType = member.type
            ? checker.getTypeAtLocation(member.type)
            : undefined;
          const returnStructure = returnType
            ? getTypeStructure(returnType)
            : "unknown";
          return `(): (${params.join(", ")}) => ${returnStructure}`;
        } else if (ts.isIndexSignatureDeclaration(member)) {
          // インデックスシグネチャの解析
          const keyType = member.parameters[0]?.type
            ? checker.getTypeAtLocation(member.parameters[0].type)
            : undefined;
          const keyStructure = keyType ? getTypeStructure(keyType) : "unknown";
          const valueType = member.type
            ? checker.getTypeAtLocation(member.type)
            : undefined;
          const valueStructure = valueType
            ? getTypeStructure(valueType)
            : "unknown";
          return `[key: ${keyStructure}]: ${valueStructure}`;
        } else {
          return "unknownMember";
        }
      });

      boostestInterfaces.push({
        type: "interface",
        name: interfaceName,
        structure: `{ ${members.join("; ")} }`,
      });
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  const output = boostestInterfaces
    .map(
      (t) =>
        `${t.type === "interface" ? "interface" : "type"} ${
          t.name
        }Structure ${t.structure}; // Extracted from ${t.type} with interface`,
    )
    .join("\n");

  return output;
}
