function int32ToIp(int32: number) {
  if (!int32) return "0.0.0.0";
  console.log(int32.toString(2).match(/\d{8}/g));
  return int32
    .toString(2)
    .match(/\d{8}/g)!
    .map((num) => parseInt(num, 2))
    .join(".");
}

console.log(int32ToIp(32));
