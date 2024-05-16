function makeBetter(value) {
  if (typeof value !== "number") return "Брехня";
  var array = Number(value).toString(2).split("").reverse();
  for (var i = 0; i + 1 < array.length; i++) {
    if (array[i] === "1" && array[i + 1] === "0") {
      console.log(array);
      array[i + 1] = "1";
      array[i] = "0";
      console.log(array);
      return parseInt(array.reverse().join().replace(/,/g, ""), 2);
    }
  }
  array[array.length - 1] = "0";
  return parseInt("1" + array.reverse().join().replace(/,/g, ""), 2);
}

console.log(makeBetter(129));
