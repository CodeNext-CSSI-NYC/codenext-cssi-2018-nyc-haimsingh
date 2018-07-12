// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
// function speak(){
//   console.log("Meow");
// }
// // 1b. Call it three times in a row. Run your code to make sure it works.
// speak();
// speak();
// speak();
// // 2a. Write (declare) a function that takes one parameter and prints out the square of that number
// function squareNum(num1){
//   console.log(num1 * num1);
// }
// // 2b. Call it three times with three different parameters. Run your code to make sure it works.
// squareNum(4);
// squareNum(8);
// squareNum(12);
//

// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
// function greaterThan(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1 + " is Greater Than " + num2);
//   }else {
//     console.log(num2 + " is Greater Than " + num1);
//   }
// }
// // 3b. Call it three times with three different parameters
// // Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// // Run your code to make sure it works.
//
// greaterThan(1,2);
// greaterThan(2,3);
// greaterThan(3,4);

// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
function name(userName) {
  return userName;
}
// 4b. Call the function and store the result in a variable. Then, print out that variable.
// // Repeat this three times with different names.
// let a = name("John");
// let b = name("James");
// let c = name("Nikki");
//
// console.log("Hello " + a);
// console.log("Hello " + b);
// console.log("Hello " + c);

// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.
function average(num5, num6) {
  return (num5 + num6) / 2
}
// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
let d = average(3, 6);
let e = average(4, 8);
let f = average("apple", 10);

console.log("The Average is " + d);
console.log("The Average is " + e);
console.log("The Average is " + f);
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?
// Nan