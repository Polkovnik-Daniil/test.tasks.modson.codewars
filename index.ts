function pigIt(row: string) {
  return row
    .split(" ")
    .map((v) => (v.match(/[A-Za-z]/) ? v.slice(1) + v.slice(0, 1) + "ay" : v))
    .join(" ");
}
console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello world !"));
