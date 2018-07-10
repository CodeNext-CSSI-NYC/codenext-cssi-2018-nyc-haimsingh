//Author Haim Singh;
let readline = require("readline-sync");

let a = parseInt(readline.question("What is the value of A ? "));
let b = parseInt(readline.question("What is the value of B ? "));
let c = parseInt(readline.question("What is the value of C ? "));

if ((a ** 2) + (b** 2 ) == (c ** 2)) {
  console.log("Yes it is  triplet");

}
else {
  console.log("Nope");
}
