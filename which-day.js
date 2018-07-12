// Declare a function whichDay that takes two parameters:
// A day of the week, and a number of days from now.
// It should return the day of the week it will be that many days from now.
function whichDay(dayNow, dayLater) {
  let dayValue;
  switch (dayNow) {
    case "Monday":
      dayValue = 1
      break;
    case "Tuesday":
      dayValue = 2;
      break;
    case "Wednesday":
      dayValue = 3;
      break;
    case "Thursday":
      dayValue = 4;
      break;
    case "Friday":
      dayValue = 5;
      break;
    case "Saturday":
      dayValue = 6;
      break;
    case "Sunday":
      dayValue = 7;
      break;
    default:
      console.log("Not a day of the week");

  }
  let dayNumber = dayValue + dayLater;
  switch (dayNumber % 7) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wendesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 0:
      return "Sunday";
      break;
    default:
      console.log("Invalid Number");

  }
}


console.log(whichDay("Thursday", 4) == "Monday");
console.log(whichDay("Tuesday", 100) == "Thursday");
console.log(whichDay("Friday", 67) == "Tuesday");
console.log(whichDay("Monday", 82) == "Saturday");