//11 6 2
function countRepeats(row: string) {
  return row.length - row.replace(/(.)\1+/g, "$1").length;
}
console.log(countRepeats("ab cca"));
