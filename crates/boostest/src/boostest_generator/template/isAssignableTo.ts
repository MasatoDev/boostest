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
    return value === typeShape || typeof value === typeShape;
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
  const tutn = arraysEqual(value, trueVal); // T extends U ? T : never
  const tunt = arraysEqual(value, falseVal); // T extends U ? never : T
  const tunu = arraysEqual(typeShape, trueVal); // T extends U ? never : U
  const tuun = arraysEqual(typeShape, falseVal); // T extends U ? U : never
  const otherVal = !tutn && !tunt && !tunu && !tuun;

  let resultArray: any[] = [];

  // ユニオン型の場合、配列の各要素をチェック
  if (Array.isArray(value)) {
    if (Array.isArray(typeShape)) {
      // Extract<"A"|"B"|"C", "A"|"B">
      if (tutn) {
        resultArray = value.filter((val) => typeShape.includes(val));
      } else if (tunt) {
        resultArray = value.filter((val) => !typeShape.includes(val));
      } else if (tunu) {
        resultArray = typeShape.filter((val) => !value.includes(val));
      } else if (tuun) {
        resultArray = typeShape.filter((val) => value.includes(val));
      }
    } else {
      // Extract<"A"|"B"|"C", "A">
      if (tutn) {
        resultArray = value.filter((val) => [typeShape].includes(val));
      } else if (tunt) {
        resultArray = value.filter((val) => ![typeShape].includes(val));
      } else if (tunu) {
        resultArray = [typeShape].filter((val) => !value.includes(val));
      } else if (tuun) {
        resultArray = [typeShape].filter((val) => value.includes(val));
      }
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
