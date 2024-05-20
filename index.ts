const rgbToHex = (r: number, g: number, b: number) =>
  [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

console.log(rgbToHex(148, 0, 211)); // '9400D3'
