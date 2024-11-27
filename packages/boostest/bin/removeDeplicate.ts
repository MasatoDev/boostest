import ts, { Node } from "typescript";

/**
 * 重複する型やクラス定義を削除する関数
 * @param {string} code - TypeScriptコード
 * @returns {string} - 重複削除後のコード
 */
export function removeDuplicateDeclarations(code: string) {
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
