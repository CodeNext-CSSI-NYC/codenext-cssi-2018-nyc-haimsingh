// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.
const readline = require('readline-sync');
// 1. Ask the user for a number and print whether it is positive or negative or zero.
// let userNum = readline.question("What is your number? ")
//
// if (userNum >= 1) {
//   console.log("Your Number is positive " );
// } else if (userNum == 0) {
//   console.log("You typed Zero didn't you? " );
// }else {
//   console.log("Your number is negetive ");
// }
// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
// let num1 = readline.question("What is your first number? ")
// let num2 = readline.question("What is your second number? ")
// let num3 = readline.question("What is your third number? ")
// if (num1 > num2 && num1 > num3) {
//   console.log("Your first Number is greater");
// }if (num2 > num1 && num2 > num3) {
//   console.log("Your second Number is greater");
// }else {
//   console.log("Your third Number is greater");
// }
// 3. Ask the user for a number and print whether it is odd or even
// let num4 = readline.question("What is your number? ")
// let remainder = num4 % 2;
// if (remainder == 0) {
//   console.log("It's even ");
// }else {
//   console.log("It's odd ");
// }
// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
// let userLet = readline.question("Type a letter ")
// if (userLet == 'a' || userLet == 'e' || userLet == 'i' || userLet == 'u' ||userLet == 'o') {
//   console.log("It's a vowel");
// }else {
//   console.log("It's a consonant");
// }
// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
// let userYear = readline.question("Type a year")
// let ifLeap = userYear % 4
// if (ifLeap == 0) {
//   console.log("It's a leap year");
// }else {
//   console.log("It's not a leap year");
// }
// // 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// // If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
// let isCitizen = readline.question("Are you a citizen for more that 9 years? y(yes) n(no) ");
// let age = parseInt(readline.question("How old are you? "));
// let loc = readline.question("Do you live in NY y(yes) n(no) ");
// if (isCitizen == 'y' && age >= 30 && loc == 'y') {
//   console.log("You can be a Senator");
// }else {
//   console.log("You can't be a Senator");
// }
// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
let userNum = parseInt(readline.question("Type a number between 1-7" ));
switch (userNum) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Try again");
}
