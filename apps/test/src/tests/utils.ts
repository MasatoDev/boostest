/************************************************************/
/*********************  HELPER  *****************************/
/************************************************************/
/** @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json */

// Helper function to run snapshot tests
export const runSnapshotTest = (name: string, value: any) => {
  if (typeof value === "function" || typeof value === "symbol") {
    test(`${name} matches snapshot`, () => {
      expect(value.toString()).toMatchSnapshot();
    });

    return;
  }

  test(`${name} matches snapshot`, () => {
    expect(stringifySafely(value)).toMatchSnapshot();
  });
};

export const failedTest = (name: string) => {
  test(`${name} matches snapshot`, () => {
    expect(true).toBe(false);
  });
};

function stringifySafely(obj) {
  const seen = new WeakSet();

  const replacer = (key, value) => {
    // 循環参照のチェック
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular]";
      }
      seen.add(value);
    }

    // undefined の処理
    if (typeof value === "undefined") {
      return "undefined";
    }

    // 関数の処理
    if (typeof value === "function") {
      return value.toString();
    }

    // シンボルの処理
    if (typeof value === "symbol") {
      return value.toString();
    }

    // ビッグイントの処理
    if (typeof value === "bigint") {
      return value.toString() + "n";
    }

    // 数値の特殊値の処理
    if (typeof value === "number") {
      if (Number.isNaN(value)) {
        return "NaN";
      }
      if (!Number.isFinite(value)) {
        return value > 0 ? "Infinity" : "-Infinity";
      }
      if (Object.is(value, -0)) {
        return "-0";
      }
    }

    // 正規表現の処理
    if (value instanceof RegExp) {
      return value.toString();
    }

    // 日付の処理
    if (value instanceof Date) {
      return {
        dataType: "Date",
        value: value.toISOString(),
      };
    }

    // エラーオブジェクトの処理
    if (value instanceof Error) {
      return {
        name: value.name,
        message: value.message,
        stack: value.stack,
      };
    }

    // Map の処理
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries()),
      };
    }

    // Set の処理
    if (value instanceof Set) {
      return {
        dataType: "Set",
        value: Array.from(value),
      };
    }

    // その他のオブジェクト（必要に応じて追加）

    return value;
  };

  return JSON.stringify(obj, replacer);
}
// カスタム文字列化関数
