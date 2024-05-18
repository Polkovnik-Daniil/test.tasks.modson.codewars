function duplicArg(...arr: any) {
  return [...new Set(arr)].length != arr.length;
}

console.log(duplicArg(1, 2, 3, 4, 5));
