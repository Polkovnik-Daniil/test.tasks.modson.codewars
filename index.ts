function isIntArray(array: number[]): boolean {
  return Array.isArray(array) && array.every((x) => typeof x === "number" && !isNaN(x));
}

console.log(isIntArray([]));
console.log(isIntArray([1, 2, 3, 4]));
console.log(isIntArray([1, 2, 3, NaN]));
