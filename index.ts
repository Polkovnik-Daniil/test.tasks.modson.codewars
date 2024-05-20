function zero(func?: any) {
  return func ? func(0) : 0;
}
function one(func?: any) {
  return func ? func(1) : 1;
}
function two(func?: any) {
  return func ? func(2) : 2;
}
function three(func?: any) {
  return func ? func(3) : 3;
}
function four(func?: any) {
  return func ? func(4) : 4;
}
function five(func?: any) {
  return func ? func(5) : 5;
}
function six(func?: any) {
  return func ? func(6) : 6;
}
function seven(func?: any) {
  return func ? func(7) : 7;
}
function eight(func?: any) {
  return func ? func(8) : 8;
}
function nine(func?: any) {
  return func ? func(9) : 9;
}

function plus(num2: number) {
  return function (num1: number) {
    return num1 + num2;
  };
}
function minus(num2: number) {
  return function (num1: number) {
    return num1 - num2;
  };
}
function times(num2: number) {
  return function (num1: number) {
    return num1 * num2;
  };
}
function dividedBy(num2: number) {
  return function (num1: number) {
    return num1 / num2;
  };
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
