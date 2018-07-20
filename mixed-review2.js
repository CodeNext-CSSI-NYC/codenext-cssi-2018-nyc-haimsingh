let fs = require('fs');
const words = fs.readFileSync('words.txt').toString().split("\n");
let readline = require('readline-sync');
let randomInt = require('random-int');




// Write a function that randomly returns the name of a cafe where we could have lunch.
// // An array with all of the cafe names is provided.
// function lunch() {
// 	let cafes = ["The Mezz", "Highline", "Hemispheres", "Panorama"];
// 	console.log(cafes[randomInt(0, 3)]);
// }
// // Run your function a bunch of times and make sure all 4 of these appear, and that
// // you never get undefined.
// lunch();


// Write a function that tracks the score of a football team: It asks the user to
// type in either touchdown or field goal. If they say touchdown or td,
// it adds 7 points to the score, and if they say field goal or fg it adds 3 points.
// (Yes, I am aware that there is more nuance in actual football.)
// If they type anything else, it prints out their total points and the program ends.
// function football() {
// 	let points = 0;
// 	let score = readline.question("What did you score? ");
// 	while ((score == "touchdown") || (score == "td") || (score == "field goal") || (score == "fg")) {
// 		if ((score == "touchdown") || (score == "td")) {
// 			points += 7;
// 			score = readline.question("What did you score? ");
//
// 		} else if ((score == "field goal") || (score == "fg")) {
// 			points += 3;
// 			score = readline.question("What did you score? ");
// 		}
// 	}
// 	console.log("you scored " + points + " points");
// }
// // You can test this one yourself, since it will depend on what you type in.
// football();



// Write a function called duckDuckGoose() that prints out "Duck Duck Goose" 10 times.
// Here is the catch: you are only allowed to type "Duck" one time in your code.
// function duckDuckGoose() {
// 	let wordWithOneUse = "Duck"
// 	for (var i = 0; i < 11; i++) {
// 		console.log(wordWithOneUse + " " + wordWithOneUse + " Goose");
// 	}
// }
// // I can't test this one without looking at your code to see if you followed the rule.
//
// duckDuckGoose();


// Write a function that has two parameters -- an array of strings and a letter
// -- and returns true if every string in the array starts with that letter.
// Otherwise it returns false.
// function sameStart(array, letter) {
// 	for (var i = 0; i < array.length - 1; i++) {
// 		if ((array[i].charAt(array[1])) == array[i + 1].charAt(array[1])) {
// 			return true;
// 		}
// 	}
// 	return false;
// }
// // These should print true
// console.log(sameStart(["bear", "ball", "because"], "b") == true);
// console.log(sameStart(["bear", "call"], "c") == false);




// Write a function that has one parameter -- a single letter --
// and returns true if it's a capital letter.
// function isCapital(letter) {
// 	if (letter == letter.toUpperCase()) {
// 		return true;
// 	}
// 	return false;
// }
// // These should print true
// console.log(isCapital("B") == true);
// console.log(isCapital("x") == false);




// Write a function that finds all words (in the array at the top) that have
// the same second and third letter and returns them in an array.
// // Hint: You need to first check to make sure the word actually has three letters.
// function repeatedLetter() {
// 	let empt = [];
// 	for (var i = 0; i < words.length; i++) {
// 		if (words[i].charAt(1) == words[i].charAt(2)) {
// 			empt.push(words[i].substring(0, words[i].length - 1));
// 			// console.log(empt);
//
// 		}
// 	}
// 	return empt;
// }
//
// // repeatedLetter();
// // These should print true
// console.log(repeatedLetter().includes("assessments") == true);
// console.log(repeatedLetter().includes("from") == false);
//



// Write a function that takes a number as a parameter and returns whether or not
// that number is exactly one away from a multiple of 10.
// function oneAway(num) {
// 	if (((num + 1) % 10 == 0) || ((num - 1) % 10 == 0)) {
// 		return true;
// 	}
// 	return false;
// 	// Hint: One approach is to start by converting a number to a string like this:
// 	// let numStr = "" + num;
// 	// Then you want to look at a specific spot in that string.
// 	// Hint2: A different approach involves using %
// }
// // These should all print true
// console.log(oneAway(101) == true);
// console.log(oneAway(79) == true);
// console.log(oneAway(60) == false);
// console.log(oneAway(1145) == false);
//



// Write a function with one parameter (a number) that returns how many times
// you need to divide the number by 2 for the answer to be less than 2.
// For example, if we start with 100:
// 100 / 2 = 50
// 50 / 2 = 25
// 25 / 2 = 12.5
// 12.5 / 2 = 6.25
// 6.25 / 2 = 3.125
// 3.125 / 2 = 1.5625
// So in this case your function would return 6, since we had to divide by 2
// // six times to get an answer that was less than 2.
// function log2(num) {
// 	let counter = 0;
// 	while (num > 2) {
// 		num /= 2
// 		counter++
// 	}
// 	return counter;
// }
// // I called this log2 because this is very similar to finding "log base 2" of a number.
// // These should all print true
// console.log(log2(100) == 6);
// console.log(log2(1000) == 9);




// Write a function that has one parameter: a 2D Array.
// Return true if any of the rows have the number 9 two or more times.
function rowHasMultiple9s(array) {
	let counter = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			if (array[i][j] == 9) {
				counter++
			}
		}
		if (counter >= 2) {
			return true;
		} else {
			counter = 0;
		}
	}
	return false;
}

// rowHasMultiple9s();
// Should be true
console.log(rowHasMultiple9s([
  [1, 2, 9],
  [9, 2, 9]
]));
// Should be false
console.log(rowHasMultiple9s([
  [1, 2, 9],
  [9, 2, 3]
]));