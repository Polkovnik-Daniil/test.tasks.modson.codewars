//11 6 2
function divisibleCount(x: number, y: number, k: number) {
  if (y < x) throw new Error("y bigger than x");
  let count: number = 0;
  for (let i = x; i <= y; i++) {
    count = i % k === 0 ? count+1 : count;
  }
  return count;
}
console.log(divisibleCount(6, 11, 2));
