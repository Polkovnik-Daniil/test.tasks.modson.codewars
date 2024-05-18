function persistence(num: number) {
  var times = 0;

  var num_str = num.toString();

  while (num_str.length > 1) {
    times++;
    num_str = num_str
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

console.log(persistence(999));
