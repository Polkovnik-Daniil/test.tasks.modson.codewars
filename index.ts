function stringParse(row: string) {
  if (typeof row !== "string") return "Please enter a valid string";
  let arr: string[] = [];
  let str: string = "";
  for (let i = 0; i < row.length; i++) {
    if (row[i - 1] === row[i]) {
      str += row[i];
    } else {
      arr.push(str);
      str = row[i];
    }
    if (i === row.length - 1) {
      arr.push(str);
    }
  }
  return arr
    .map((v) => (v.length > 2 ? v.slice(0, 2) + "[" + v.slice(2) + "]" : v))
    .join("");
}

console.log(stringParse("aaaabbcdefffffffg"));
