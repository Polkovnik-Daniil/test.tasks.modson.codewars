function grabscrab(anagram: string, dictionary: string[]) {
  anagram = anagram.split("").sort().join();
  let arr = dictionary
    .slice()
    .map((word) => word.split("").sort().join() === anagram);
  return dictionary.filter((word, i) => arr[i] === true);
}

console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]));
