const readline = require('readline-sync');
// // 1a. Print out all of the numbers from 1 to 20 (using a loop).
// // for (let i = 0; i < 21; i++) {
// //   console.log(i);
// // }
// // 1b. Print out all of the numbers from 20 to 1 (using a loop).
// for (let i = 20; i > 0; i--) {
//   console.log(i);
// }
//

// 2. Write a function that takes in a number and prints out all of the factors
// of that number. For example, for 23 it will print 1 and 23. For 24, it will
// print 1, 2, 3, 4, 6, 8, 12, 24. Recall that the factors of a number are all
// the numbers it is divisible by (from 1 up to itself).
// Make sure to test this with several numbers (including some huge ones from fun).
// let num = parseInt(readline.question("What is your number?"));
// factors = 1
// for (let factors = 0; factors < num; factors++) {
//   if (num % factors == 0) {
//     console.log(factors);
//   }
// }
// // console.log(num);
// // 3. Print out all of the odd numbers between 300 and 350 (using a loop).
// for (let num = 300; num < 351; num++) {
//   if (num % 2 == 1) {
//     console.log(num);
//   }
// }

// 4. Write a function that, given a string of any length,
// // // returns true if it contains at least one space.
//
// function containsSpace(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (i = "") {
//       return false;
// //     } else {
// //       return true;
// //     }
// //   }
// // }
// // // // Some tests
// // console.log(containsSpace("star wars") == true);
// // console.log(containsSpace("     ") == true);
// // console.log(containsSpace("apple") == false);
// // console.log(containsSpace("") == false);
// //
//
//
// // // 5. Given a string of any length, return the total number of times "a" or "A" appears.
//
// //
// // function countAs(str) {
// //   let numA = 0
// //   for (let a = 0; a < str.length; a++) {
// //     if ((str.charAt(a) == "a") || (str.charAt(a)) == "A") {
// //       numA++
// //
// //     }
// //   }
// //   return numA;
// // }
// // // Some tests
// // console.log(countAs("happy") == 1);
// // console.log(countAs("lady gaga") == 3);
// // console.log(countAs("") == 0);
//
// //
// //
// // // 6. Write a function arithmeticSequence that takes in a starting number (start),
// // // a difference (diff), and a number of terms (numTerms), and prints out the
// // // first numTerms of the sequence. For example, if the inputs are
// // // 3 (start), 4 (diff), and 6 (numTerms), then it should print out:
// // // 3, 7, 11, 15, 19, 23
// // // Because it starts at 3, each term goes up by 4, and there are 6 terms.
// function arithmeticSequence(start, diff, numTerms) {
// //   let arg;
// //   for (let i = 0; i < numTerms; i++) {
// //     arg = start + (diff * i);
// //     console.log(arg);
// //   }
// // }
// // console.log(arithmeticSequence(2, 5, 7));
//

// // 7. Given a string of any length, return a new string that is a copy of that string in reverse.
// function reverseString(str) {
//   let nwWord = str.split("").reverse().join('');
//   return nwWord;
//   // for (var i = 0; i < str.length; i++) {
//   // str[i]
//   // }
// }
// // Some tests
// console.log(reverseString("banana") == "ananab");
// console.log(reverseString("Was it a car or a cat I saw?") == "?was I tac a ro rac a ti saW");
// console.log(reverseString("doorag") == "garood");
// console.log(reverseString("a") == "a");
// console.log(reverseString("") == "");
// //
//
// //
// // Bonus - 8. Write a function isPrime that takes a number and checks if it is prime.
// // It should return either true or false.
// // Recall that a prime number is only divisible by itself and 1.
// function isPrime(num) {

// }
// // Here are some tests -- add more
// console.log(isPrime(89) == true);
// console.log(isPrime(91) == false);
// console.log(isPrime(89) == true);
// console.log(isPrime(91) == false);