function breakingSearchBad(titles: string[], searchTerm: string) {
  return titles.filter((v) => new RegExp(searchTerm, "i").test(v));
}

console.log(
  breakingSearchBad(["Rocky 1", "Rocky 2", "My Little Poney"], "ock")
);
