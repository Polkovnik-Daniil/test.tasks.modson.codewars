function splitStrings(row: string) {
  let arr: string[] = [];
  for (let i = 0; i < row.split("").length; i += 2) {
    arr.push(row.slice(i, i + 2));
  }
  return arr.map((v) => (v.length === 1 ? v + "_" : v));
}

console.log(splitStrings('abc'));
