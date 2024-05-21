function evilTwin(obj: any): any {
  let twin = Object.assign({}, obj);
  twin.hasGoatee = true;
  return twin;
}

var orig = { x: 5 };
console.log(orig.x); // -> 5
//console.log(orig.hasGoatee) // -> undefined
var twin = evilTwin(orig);
console.log(twin.x); // -> 5
console.log(twin.hasGoatee); // -> true
