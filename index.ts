class Vector {
  array!: number[];
  constructor(value: number[]) {
    this.array = value;
  }
}
interface Vector {
  add(vect: Vector): Vector;
  subtract(vect: Vector): Vector;
  dot(vect: Vector): number;
  equals(vect: Vector): boolean;
  norm(): number;
}

Vector.prototype.add = function (vect: Vector) {
  var a = this.array;
  var vect_arr = vect.array;
  if (a.length !== vect_arr.length)
    throw new TypeError("Vectors have different length");
  return new Vector(
    a.map(function (x, i) {
      return x + vect_arr[i];
    })
  );
};

Vector.prototype.subtract = function (vect: Vector) {
  var array = this.array;
  var vect_arr = vect.array;
  if (array.length !== vect_arr.length)
    throw new TypeError("Vectors have different length");
  return new Vector(
    array.map(function (x, i) {
      return x - vect_arr[i];
    })
  );
};

Vector.prototype.dot = function (vect: Vector) {
  var array = this.array;
  var vect_arr = vect.array;
  if (array.length !== vect_arr.length)
    throw new TypeError("Vectors have different length");
  return array.reduce(function (s, x, i) {
    return s + x * vect_arr[i];
  }, 0);
};

Vector.prototype.equals = function (vect: Vector) {
  var array = this.array;
  var vect_arr = vect.array;
  if (array.length !== vect_arr.length) return false;
  return array.every(function (x, i) {
    return x === vect_arr[i];
  });
};

Vector.prototype.norm = function () {
  var array = this.array;
  return Math.sqrt(
    array.reduce(function (s, x) {
      return s + x * x;
    }, 0)
  );
};

// Vector.prototype.toString = function () {
//   return "(" + this.x.join(",") + ")";
// };

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);
console.log(a.add(b)); // should return a new Vector([4, 6, 8]))
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b)); // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm()); // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.add(c)); // throws an error
