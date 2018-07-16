// // This game has already been discussed in the notes on the site.
// // Do not look back at those notes, that would ruin the learning.
// // If you have not yet done so, run npm install random-int in terminal.
// // Google "npm random-int" to see how it works.
// // We will make a guessing game as follows:
// // Set a random number from 1 to 100 to be the answer.
// // Ask the user to guess a number.
// // If they're wrong, you should ask them to guess again.
// // Each time they guess, you should be telling them if their guess was too high or too low.
// // Also, you should be tracking how many times they have guessed.
// // Then, at the end, when you tell them that they guessed correctly,
// // you should mention how many guesses it took them.
// const randomInt = require('random-int');
// const readline = require('readline-sync');
const randomInt = require('random-int');
const readline = require('readline-sync');
let randomNum = randomInt(100);
let counter = 0;
let guess;
while (guess != randomNum) {
  guess = readline.question("What is your guess? ")
  if (guess > randomNum) {
    console.log("Too high");
    counter++
  } else if (guess < randomNum) {
    console.log("Too low");
    counter++
  } else {
    console.log("You guessed it");
    console.log("It took you " + counter + " tries");
  }

}