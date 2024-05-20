function notVerySecure(row: string): boolean {
  return /[a-zA-Z0-9]/g.test(row) && !/[\s_!]/.test(row);
}

console.log(notVerySecure("fughvis034"));
console.log(notVerySecure("Фi73874riuhfdv_oaigfbho"));
console.log(notVerySecure("i73874riuhfdv oaigfbho"));
console.log(notVerySecure("шдовгтмазщапм12353_ "));
