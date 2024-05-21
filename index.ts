function camelize(row: string): string {
  return row
    .replace(/[^a-z0-9]/gi, " ")
    .split(" ")
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase())
    .join("");
}
console.log(camelize("example name"));
console.log(camelize("your-NaMe-here"));
console.log(camelize("testing ABC"));