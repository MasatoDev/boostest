export const runSnapshotTest = (name: string, value: any) => {
  if (typeof value === "function" || typeof value === "symbol") {
    test(`${name} matches snapshot`, () => {
      expect(value.toString()).toMatchSnapshot();
    });
    return;
  }

  test(`${name} matches snapshot`, async () => {
    const str = await stringifySafely(value);
    expect(str).toMatchSnapshot();
  });
};

export const failedTest = (name: string) => {
  test(`${name} matches snapshot`, () => {
    expect(true).toBe(false);
  });
};

// Promiseを再帰的に解決して返すヘルパー関数
async function resolvePromises(obj: any, seen = new WeakMap()) {
  if (obj && typeof obj === "object") {
    if (seen.has(obj)) {
      return obj; // 循環参照の場合そのまま返す(または[Circular]扱い)
    }
    seen.set(obj, obj);

    // Promise の場合は解決する
    if (typeof obj.then === "function" && typeof obj.catch === "function") {
      obj = await obj;
    }

    // 解決後もオブジェクトであれば、再帰的にプロパティを処理
    if (obj && typeof obj === "object") {
      for (const [k, v] of Object.entries(obj)) {
        obj[k] = await resolvePromises(v, seen);
      }
    }
  }
  return obj;
}

async function stringifySafely(obj) {
  // まずPromiseを全て解決する
  const resolved = await resolvePromises(obj);

  const seen = new WeakSet();

  function replacer(key, value) {
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

    return value;
  }

  return JSON.stringify(resolved, replacer);
}
