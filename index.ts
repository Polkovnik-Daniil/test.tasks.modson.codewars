function pangram(row: string) {
  let str = row
    .split(" ")
    .join("")
    .replace(/[\W\d]/g, "")
    .toLowerCase()
    .split("");
  return [...new Set(str)].length == 26;
}

console.log(pangram("The quick brown fox jumps over the lazy dog"));
