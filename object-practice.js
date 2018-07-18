let testObj = {
	2: 12,
	3: 18,
	1: 6
};

// // 1. Create an object called myObj with the following key-value pairs:
// // a -> 23
// // b -> 12
// // c -> 3
// let myObj = {
//   a:23,
//   b:12,
//   c:3,
// }
// // After you create this object, add the key value pair d -> 14 to the object
// myObj["d"] = 14;
// // Print out the object to make sure it looks like you expect
//
// // Change the value associated with the key b from 12 to 19
// // myObj["b"] = 19;
// // // console.log(myObj);
// // // Create an array called myObjKeys that contains the keys from this object using Object.keys()
// // let myObjKeys = Object.keys(myObj);
// // // Print it out to make sure it looks right
// // console.log(myObjKeys);
// // // Create an array called myObjValues that contains the values from this object using Object.values()
// // let myObjValues = Object.values(myObj);
// // console.log(myObjValues);
// // // Print it out to make sure it looks right
// // // Print out the value associated with the key "a" using both styles of accessing object values.
// // // Make sure you know how to use both of them.
//
//
// // 2. Create an object that contains any key-value pairs you want.
// let myObj ={
//   a:1,
//   b:2,
//   c:3
// }
// console.log(myObj);
// // Print it out, make sure it looks right.
// delete myObj.a;
// // Delete one of the key-value pairs.
// console.log(myObj);
// // Add a new one.
// myObj["a"] = "no";
// // Change the value associated with one of the existing keys.
// myObj["b"] = "yes"
// // Print it out again. Does it look as you expected?
// console.log(myObj);
// // Store one of the values from the object into a variable called myVal.
// let myVal = myObj["a"];
// // Print out another value from the object.
// console.log(myVal);
// // The purpose of the previous two things is to make sure you know both ways to
// // access values in objects using keys. Make sure you can do both.
//
//
//
// // 3. Write a function that takes a string as input and returns an object
// whose key-value pairs are counts of the number of times each letter appears.
function letterCount(str) {
	let myObj = {};
	for (var i = 0; i < str.length; i++) {
		let letter = str[i];
		if (myObj[letter] == undefined) {
			myObj[letter] = 1;
		} else {
			myObj[letter]++;
		}
	}
	return myObj;
}
// For example, letterCount("mississippi") would return something like:
// {
//   m: 1,
//   i: 4,
//   s: 4,
//   p: 2
// }
// Hint: Loop through str. For each letter, check if it already exists in obj as a property.
// You can check to see if a certain key already exists in an object using
// obj.hasOwnProperty(key)newArray.join("");
// So eachLetterOnce("mississippi") would return "misp" (letters may be in another order).
// Hint: Use an object to keep track of what letters appear in the word. You can
// set obj[letter] = true for each letter you come across.
// At the end, get the keys of that object (which is an array) and use join
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
// to create a string.
// that contains each letter in the original string exactly once.
function eachLetterOnce(str) {
	let myObj = {};
	let letters = letterCount(str);
	let newArray = Object.keys(myObj);
	console.log(newArray.join(""));
}


// 5. Write a function that takes one parameter, an object, and prints out a line
// like the followng for every key-value pair in the object:
// // "The key ___ has a value of ___"
// function printKeysAndValues(obj) {
// 	let myObjKeys = Object.keys(obj);
// 	let myObjValues = Object.values(obj);
// 	for (var i = 0; i < Object.keys(obj).length; i++) {
// 		console.log("The key " + myObjKeys[i] + " has a value of " + myObjValues[i]);
// 	}
// }

printKeysAndValues(testObj)
// Hint: You will need to get the array of keys, and use a for loop to go through all of the keys.
// Hint2: Inside the for loop, you will need to use the index to access the key,
// and then you will need to use the key to access the corresponding value.