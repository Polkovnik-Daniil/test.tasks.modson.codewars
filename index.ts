function easyDiagonal(n: number, p: number) {
  let fac = function (n: number): number {
    return n === 0 ? 1 : n * fac(n - 1);
  };
  return Math.round(fac(n + 1) / (fac(n - p) * fac(p + 1)));
}

console.log(easyDiagonal(20, 4));
