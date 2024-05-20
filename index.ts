function intToBits(int: number, length: number = 32): string {
  return int
    .toString(2)
    .padStart(32, "0")
    .substring(32 - length, 32);
}
console.log(intToBits(1, 1));
console.log(intToBits(5, 8));
