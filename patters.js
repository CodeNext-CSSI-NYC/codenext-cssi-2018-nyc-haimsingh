// You can use nested loops and 2-d arrays to draw patterns
// Here is an example:
// let numRowsCols = 15;
// for (let i = 0; i < numRowsCols; i++) {
// 	let row = "";
// 	for (let j = 0; j < numRowsCols; j++) {
// 		if (i == j) {
// 			row += "X";
// 		} else {
// 			row += "-";
// 		}
// 	}
// 	console.log(row);
// }
// Run this, and make sure you understand exactly why it looks as it does



// 1. Try to make this one. Hint: you will need to compare i and j in order to
// decide when to add * onto the strings that represent each row.

// *
// **
// ***
// ****
// *****
// ******

//
// for (let i = 0; i < 6; i++) {
// 	let row = "";
// 	for (let j = 0; j <= i; j++) {
// 		row += "*";
//
// 	}
// 	console.log(row);
// }

// 2. Try to figure out how to draw a "border" pattern:

// XXXXXXXX
// X------X
// X------X
// X------X
// X------X
// X------X
// X------X
// XXXXXXXX

// let num = 9
// for (let i = 0; i < num; i++) {
// 	let row = "";
// 	if ((i == 0) || (i == num-1)) {
// 		row = "XXXXXXXX";
// 	} else {
// 		for (let j = 0; j < i + 1; j++) {
// 			if ((j !== 0) || (j !== 8))
// 				row = "X------X";
// 		}
//
// 	}
//
// 	console.log(row);
// }

// Bonus -- All the ones that follow are surprisingly tricky.

// 3. Hint -- You will need to add spaces to the string up to a certain point,
// and then add stars.
// Hint2 -- You could consider adding the stars first and then
// adding the spaces to the beginning of the string.

//     *
//    **
//   ***
//  ****
// *****

for (let i = 6; i > 0; i--) {
	let row = "";
	for (let j = 0; j < 6; j++) {
		if (j < i - 1) {
			row += " ";
		} else {
			row += "*";
		}


		// row = row + "xxx"
		// row = "x" + row
	}
	console.log(row);
}


// 4. Here's one that builds on the same idea in the previous pattern:
// *   *    0,0     0,4
//  * *     1,1     1,3
//   *      2,2     2,2
//  * *     3,3     3,1
// *   *    4,4     0,0

// for (let i = 0; i < 5; i++) {
// 	let row = " ";
// 	for (var j = 0; j < 5; j++) {
// 		if (i == j) {
// 			row = "*" + row
// 		}
// 		// for (let j = 0; j <= i; j++) {
// 		row = "*" + row;
//
// 		// console.log(row);
// 		// row = "*" + row;
// 	}
// 	// row = "*" + row;
//
// 	console.log(row);
// 	// console.log(row);
// }
// //
// let row2 = "high";
// console.log(row2);
// row2 = "8" + row2;
// console.log(row2);
// // (For the ones that follow, feel free to use something other than "X" and "-").
// The characters that you draw don't matter, just the pattern they are in.

// HINT: The only way to figure these out is to write down the coordinates of
// the spots that have the X's in them, compare them to the spots that have "-"
// in them, and try to find a pattern you can express in code.



// 5. Try to figure out how to draw a "chessboard" pattern:

// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X



// These last two are very hard.

// 6. Try to figure out how to draw a "grid" pattern:
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX



// 7. A pyramid!
// Hint for this one... try printing stars straight down the middle first.
// How do you know what value will be the "middle"? Once you figure out what the middle is,
// you can add stars to the left and right of it as you go down the rows.
//
//     *
//    ***
//   *****
//  *******
// *********