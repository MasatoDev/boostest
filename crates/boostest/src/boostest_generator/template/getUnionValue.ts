const isArray = false;

function getFirstNonNullOrUndefined(arr: any[]): any {
  // Step 1: Filter out undefined and null values
  const filteredArray = arr.filter(
    (item) => item !== undefined && item !== null,
  );

  // Step 2: Check if the filtered array is not empty
  if (filteredArray.length > 0) {
    // Step 3: Return the first element of the filtered array
    return filteredArray[0];
  } else {
    // Step 4: Return the first undefined or null element from the original array
    return arr.find((item) => item === undefined || item === null);
  }
}

function getUnionValue(a: any, isArray = false) {
  return isArray ? a : getFirstNonNullOrUndefined(a);
}
