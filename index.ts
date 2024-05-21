function toInteger(value: any) {
  if (isNaN(Number(value))) return 0;
  value = Math.trunc(value);
  if (!Number.isFinite(value)) return 0;
  return value;
}

console.log(toInteger(" 98"));
