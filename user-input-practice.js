// // Author : Haim Singh
let readline = require("readline-sync")
// // Remember that you can comment parts of your code in and out!
// // Try this as you move from question to question below.
//
// // 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
let userNum = readline.question("Number please; ")
console.log("The square root of " + userNum + " is " + Math.sqrt(userNum));
// // 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
let userName = readline.question("What's your name?")
console.log("Your name has " + userName.length + " letters");
// // 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
let userWord = readline.question("Word Please :")
console.log("The word " + userWord + "starts with the letter " + userWord.charAt(0));
// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.
let userNum1 = parseInt(readline.question("One Number pls"));
let userNum2 = parseInt(readline.question("Another Number pls"));
let userAdv = (userNum1 + userNum2) / 2;
console.log(userAdv);;
console.log("The average of " + userNum1 + " and " + userNum2 + " is " + userAdv);