function isValidIP(ip: string): boolean {
  return /^(?!.*\.$)((?!0\d)(1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(ip);
}

console.log(isValidIP("0.0.0.0"));
console.log(isValidIP(""));
console.log(isValidIP("\n1.2.3.4"));
console.log(isValidIP("01.02.03.04"));
console.log(isValidIP("1e0.1e1.1e2.2e2"));
console.log(isValidIP("137.255.156.100"));

