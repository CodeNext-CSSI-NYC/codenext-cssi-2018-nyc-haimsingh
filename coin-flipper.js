const readline = require('readline-sync');
let hOrT = Math.random()
let coinres
if (hOrT > .5) {
  coinres = "h"
}else {
  coinres = "t"
}
let userChoice = readline.question("What do you think it landed on? h(head) t(tail)")
if (coinres == userChoice) {
  console.log("You guessed right ");
}else {
  console.log("You guessed wrong ");
}
console.log(hOrT);
