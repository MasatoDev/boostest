function ensureArray<T>(input: T | T[]): T[] {
  return Array.isArray(input) ? input : [input];
}

function arraysEqual(arr1: any, arr2: any) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function isAssignableTo(value: any, typeShape: any) {
  // プリミティブ型またはリテラル値のチェック
  if (typeof typeShape !== "object" || typeShape === null) {
    return (
      value === typeShape ||
      typeof value === typeShape ||
      // WARN: Cannot compare different string types such as 'hoge', 'fuga'
      typeof value === typeof typeShape
    );
  }

  // オブジェクト型のチェック
  if (typeof value !== "object" || value === null) {
    return false;
  }

  // ネストされたプロパティを再帰的にチェック
  return Object.keys(typeShape).every((key): boolean => {
    if (!(key in value)) return false; // プロパティが存在しない場合は false
    return isAssignableTo(value[key], typeShape[key]);
  });
}
function extendsUtil(
  value: any,
  typeShape: any,
  trueVal: any,
  falseVal: any,
): any {
  const isValueArray = Array.isArray(value);
  const isTypeShapeArray = Array.isArray(typeShape);

  const arrayValue = ensureArray(value);
  const arrayTypeShape = ensureArray(typeShape);
  const arrayTrueVal = ensureArray(trueVal);
  const arrayFalseVal = ensureArray(falseVal);

  const tutn = arraysEqual(arrayValue, arrayTrueVal); // T extends U ? T : never
  const tunt = arraysEqual(arrayValue, arrayFalseVal); // T extends U ? never : T
  const tunu = arraysEqual(arrayTypeShape, arrayTrueVal); // T extends U ? never : U
  const tuun = arraysEqual(arrayTypeShape, arrayFalseVal); // T extends U ? U : never
  const otherVal = !tutn && !tunt && !tunu && !tuun;

  let resultArray: any[] = [];

  // ユニオン型の場合、配列の各要素をチェック
  if (isValueArray || isTypeShapeArray) {
    // Extract<"A"|"B"|"C", "A"|"B">
    if (tutn) {
      resultArray = arrayValue.filter((val) => arrayTypeShape.includes(val));
    } else if (tunt) {
      resultArray = arrayValue.filter((val) => !arrayTypeShape.includes(val));
    } else if (tunu) {
      resultArray = arrayTypeShape.filter((val) => !arrayValue.includes(val));
    } else if (tuun) {
      resultArray = arrayTypeShape.filter((val) => arrayValue.includes(val));
    }

    if (otherVal) {
      if (resultArray.length === 0) {
        return falseVal;
      } else {
        return trueVal;
      }
    }

    return resultArray[0];
  }

  return isAssignableTo(value, typeShape) ? trueVal : falseVal;
}
