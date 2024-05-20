Math.round = function(number: number) {
  return (number - parseInt(number.toString()) >= 0.5) ? parseInt(number.toString()) + 1 : parseInt(number.toString()) ;
};

Math.ceil = function(number: number) {
  return (parseInt(number.toString()) === number) ? number : parseInt(number.toString()) + 1;
};

Math.floor = function(number: number) {
  return parseInt(number.toString());
};

console.log(Math.floor(5.999));
console.log(Math.ceil(5.999));
console.log(Math.round(5.999));