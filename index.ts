function towerBuilder(n: number) {
  return [...Array(n)].map(
    (_, i) =>
      " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i)
  );
}

console.log(towerBuilder(5));
