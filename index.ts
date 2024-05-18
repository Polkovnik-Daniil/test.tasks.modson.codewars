function rankVector(a: number[]) {
  let sorted = a.slice().sort((a, b) => b - a);
  return a.map((v) => sorted.indexOf(v) + 1);
}

console.log(rankVector([3,3,3,3,3,5,1]));
