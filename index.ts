function humanReadable(seconds: number) {
  var hours = parseInt((seconds / 3600).toString());
  var minutes = parseInt((seconds / 60).toString()) % 60;
  var seconds = seconds % 60;

  var dozen = (value: number) => (value < 10 ? "0" + value : value);
  return dozen(hours) + ":" + dozen(minutes) + ":" + dozen(seconds);
}
console.log(humanReadable(359999));