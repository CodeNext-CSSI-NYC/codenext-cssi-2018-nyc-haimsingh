const readline = require('readline-sync');
const randomint = require('random-int');

let numW = 0;
let numR = 0;
let quizYN = readline.question("Do you want to take a quiz? y(yes) n(no)");
if (quizYN == 'y') {
    console.log("Lets starts");
    console.log("How much you know about Yu-Gi-Oh ");
  let q1 = readline.question("How much life points(LP) do each duelist start with? a(4000) b(6000) c(8000)")
  if (q1 == 'c') {
    console.log("Correct! Each duel starts with 8000 life points")
    numR++
    console.log(numR + " Right");
    console.log(numW + " Wrong");
  }else {
    console.log("Incorrect! Each duel starts with 8000 life points");
    numW++
    console.log(numR + " Right");
    console.log(numW + " Wrong");
  }
  let q2 = readline.question("What is a valid amout of card a player can play with? a(30) b(60) c(90)")
  if (q2 == 'b') {
    console.log("Correct! A duelist can have anywhere between 40 - 70 cards");
    numR++
    console.log(numR + " Right");
    console.log(numW + " Wrong");
  }else {
    console.log("Incorrect! A duelist can anywhere between 40 -70 cards");
    numW++
    console.log(numR + " Right");
    console.log(numW + " Wrong");
  }
  let q3 = readline.question("How many types of monsters are there? a(6) b(1) c(3)")
  if (q3 == 'a') {
    console.log("Correct! There are 1.Normal 2.Fusion 3.Ritual 4.XYZ 5.Link 6.Syncro");
    numR++
    console.log(numR + " Right");
    console.log(numW + " Wrong");
  }else {
    console.log("Incorrect! There are 1.Normal 2.Fusion 3.Ritual 4.XYZ 5.Link 6.Syncro");
    numW++
    console.log(numR + " Right");
    console.log(numW + " Wrong");
  }
  let q4 = readline.question("How many types of spell cards are there? a(6) b(1) c(3)")
  if (q4 == 'a') {
    console.log("Correct! There are 1.Normal 2.Quick-Play 3.Ritual 4.Field 5.Continuous 6.Equip");
    numR++
    console.log(numR + " Right");
    console.log(numW + " Wrong");
  }else {
    console.log("Inorrect! There are 1.Normal 2.Quick-Play 3.Ritual 4.Field 5.Continuous 6.Equip");
    numW++
    console.log(numR + " Right");
    console.log(numW + " Wrong");
  }
  let q5 = readline.question("How many types of trap cards are there? a(6) b(1) c(3)")
  if (q5 == 'c') {
    console.log("Correct! There are 1.Normal 2.Continuous 3.Counter");
    numR++
    console.log(numR + " Right");
    console.log(numW + " Wrong");
  }else {
    console.log("Inorrect! There are 1.Normal 2.Continuous 3.Counter");
    numW++
    console.log(numR + " Right");
    console.log(numW + " Wrong");
  }
}else {
  console.log("Goodbye");
}
