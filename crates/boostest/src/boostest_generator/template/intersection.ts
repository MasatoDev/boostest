function isNullOrUndefined(value) {
  return value === undefined || value === null;
}
function emptyObj(value) {
  if (isNullOrUndefined(value)) return false;
  return typeof value === "object" && Object.keys(value).length === 0;
}
function intersectionUtil(...args) {
  let values = args;
  // If it includes {}, filter out null and undefined, and also remove {}
  const includesEmptyObj = values.some((val) => emptyObj(val));

  if (includesEmptyObj) {
    values = values.filter((val) => !isNullOrUndefined(val) && !emptyObj(val));
  }

  if (values.length === 0) return null;
  // null or undefined cannot match, so treat as "never" (return null)
  if (values.some((val) => isNullOrUndefined(val))) {
    return null;
  }

  if (values.length === 1) return values[0];

  const firstType = typeof values[0];
  const isSameType = values.every((value) => typeof value === firstType);

  // Different types cannot be handled, so treat as "never" (return null)
  if (!isSameType) return null;

  if (firstType === "object" && values.every((value) => value !== null)) {
    return values.reduce((acc, value) => ({ ...acc, ...value }), {});
  }

  return values[0];
}
