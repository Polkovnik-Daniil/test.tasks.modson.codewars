function nameToMatrix(name: string): string[][] {
  if (!name.length) throw new Error("name must be at least one letter");
  let length = 1;
  while (name.length > length) {
    length++;
    if (name.length < Math.pow(length, 2)) break;
  }
  let arr = [];
  let z = 0;
  for (let i = 0; i < length; i++) {
    let temp = [];
    for (let j = 0; j < length; j++) {
      temp.push(name[z] || ".");
      z++;
    }
    arr.push(temp);
  }
  return arr;
}
console.log(nameToMatrix("Frank"));
