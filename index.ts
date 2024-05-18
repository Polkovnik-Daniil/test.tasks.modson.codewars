function groupByNumber(array: number[]) {
  let map = new Map();
  for (let e of array) {
      map.set(e, map.has(e) ? map.get(e) + 1 : 1);
  }
  return [...map];
}
function findOdd(a: number[]) {
  let groups = groupByNumber(a);
  return groups.find(e => e[1] % 2)![0];
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));