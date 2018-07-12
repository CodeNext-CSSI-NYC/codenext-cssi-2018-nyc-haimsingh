const readline = require('readline-sync');
let computerInt = Math.random() * 3
let cC
// console.log(computerInt);
if (0 < computerInt && computerInt < 1) {
  cC = 'r'
} else if (computerInt > 1 && computerInt < 2) {
  cC = 's'
} else {
  cC = 'p'
}
// console.log(cC);
let uC = readline.question("What will you throw? p(paper) s(scissor) r(rock)")

if ((cC == 'p' && uC == 'p') || (cC == 's' && uC == 's') || (cC == 'r' && uC == 'r')) {
  console.log("You tied.");
} else if ((cC == 'p' && uC == 's') || (cC == 's' && uC == 'r') || (cC == 'r' && uC == 'p')) {
  console.log("You won the computer played " + cC);
} else {
  console.log("You're a loser the computer played " + cC);
}