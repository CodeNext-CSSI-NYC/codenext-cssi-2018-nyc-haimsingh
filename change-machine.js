// Author: Haim Singh
let readline =require("readline-sync");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("OoF aM cOiN MAchiNE");
console.log("HoW Much cOiNs doSE yoU HaVe?");
let cOiN = parseInt(readline.question("Enter amout of coins"));
let qur = Math.floor(cOiN / 25);
let dim = Math.floor((cOiN % 25) / 10);
let nick = Math.floor(((cOiN%25)) % 10) / 5;
let pen = Math.floor((((cOiN%25)) % 10) % 5) / 1;
console.log("YoU GiT " + qur + " QuArtes");
console.log("YoU GiT " + dim + " DiMEs");
console.log("yoU GiT " + nick + " NicKleS");
console.log("YoU GiT " + pen + " PeNNiES");
console.log("~~~~~~~~~~~~~~~~~~~~~~~");
