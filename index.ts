function twosDifference(input: number[]) {
  input = input.sort((a, b) => a - b);
  let arr: number[][] = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (Math.abs(input[i] - input[j]) === 2) {
        arr.push([input[i], input[j]]);
        break;
      }
    }
  }
  return arr;
}

console.log(twosDifference([4,3,1,5,6]));