export class Vector {
  public array: number[];
  public length: number;
  constructor(components: number[]) {
    if (components === undefined || typeof components !== "object") {
      throw "Ерунду даешь)";
    }
    this.length = components.length;
    const _sorted = components.sort();
    this.array = _sorted;
  }
  validateVector(elements: Vector, length: number) {
    if (elements === undefined || elements.array === undefined) {
      throw "v or v.array undefined";
    }
    if (elements.length === this.length) {
      return elements.array.sort();
    } else {
      throw "Маловат)";
    }
  }
  add(elements: Vector) {
    const verif = this.validateVector(elements, this.length);
    var sum = [];
    for (var i = 0; i < this.length; i++) {
      sum[i] = this.array[i] + verif[i];
    }
    return new Vector(sum);
  }
  subtract(elements: Vector) {
    var verif = this.validateVector(elements, this.length);
    var sum = [];
    for (var i = 0; i < this.length; i++) {
      sum[i] = this.array[i] - verif[i];
    }
    return new Vector(sum);
  }
  dot(elements: Vector) {
    var verif = this.validateVector(elements, this.length);
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this.array[i] * verif[i];
    }
    return sum;
  }
  norm() {
    var norm = 0;
    for (var i = 0; i < this.length; i++) {
      norm += Math.pow(this.array[i], 2);
    }
    return Math.pow(norm, 0.5);
  }
  toString() {
    return "(" + this.array.toString() + ")";
  }
  equals(elements: Vector) {
    if (elements.array.length !== this.length) return false;
    for (var i = 0; i < this.length; i++) {
      if (elements.array[i] !== this.array[i]) {
        return false;
      } else {
        return true;
      }
    }
    return true;
  }
}

var a = new Vector([2, 2]);
var b = new Vector([3, 4]);

console.log(a.add(b).equals(new Vector([5, 6])));
