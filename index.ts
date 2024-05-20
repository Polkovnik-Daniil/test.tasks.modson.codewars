function countDays(date: Date) {
  let time = date;
  let today = new Date();
  let todayCheck =
    time.getFullYear() === today.getFullYear() &&
    time.getMonth() === today.getMonth() &&
    time.getDay() === today.getDay();
  if (todayCheck) return "Today is the day!";
  let past = today.getTime() > time.getTime();
  if (past) return "The day is in the past!";
  return `${Math.round(
    (time.getTime() - today.getTime()) / 1000 / 60 / 60 / 24
  )} days`;
}

console.log(countDays(new Date("February 28, 2016")));
console.log(countDays(new Date()));