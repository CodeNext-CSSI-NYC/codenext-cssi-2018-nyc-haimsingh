const randomInt = require('random-int');
const readline = require('readline-sync');


// // 1a. Use a while loop to print out numbers from 1 to 10
// // let x = 1;
// //
// // while (x < 11) {
// //   console.log(x);
// //   x++;
// // }
// // 1b. Use a while loop to print out numbers from 30 to 15
// let y = 30;
//
// while (y > 14) {
// //   console.log(y);
// //   y--;
// // }
// //
// //
// // // 2. Write a program that keeps rolling a die until the roll is a 5. Print out each roll.
// // // If you haven't yet done so, you should run
// // // npm install random-int
// // // and use that to get a random number from 1 to 6.
// // // Google "npm random-int" for more info.
// let dice = 0
// while (dice != 5) {
//   dice = randomInt(1, 6)
//   console.log(dice);
// }
//
//

// // 3. Write a program that asks the user to guess a secret password.
// // Until the user enters the correct password (which is chosen by you in advance),
// // the program will keep asking for all eternity. When they finally do enter the
// // // correct password, exit the loop and print a congratulatory message.
// let password;
// let trys = 0
// while (password != "nudiustertian") {
//   password = readline.question("What's the password? ")
//   trys++
//   console.log(trys + "times wrong");
// }
//



// // Hint: Declare userInput outside the loop and initialize it to the value of readline.question("Enter password: ").
// // The while loop will check if userInput matches the correct password.
// // If not, inside the loop you should print "Sorry! That's incorrect", then
// // assign userInput to the value of readline.question("Enter password: ") again.
//
// // Bonus: Enhance your program to only allow the user to try entering the correct password three times.
// // If they fail three times, the program should kick them out and tell them they are a robot.
// // When the user enters the wrong password, the program tells them that they are wrong,
// // along with how many attempts they've made so far.