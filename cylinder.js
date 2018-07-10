// Author Haim Singh
const readline = require('readline-sync');


let shape = readline.question("What is your shape? S(Sphere) or C(Cylinder)");

if (shape == "C") {
  let heightC = parseInt(readline.question("What is the Cylinder's height?"));
  let radiusC = parseInt(readline.question("What is the Cylinder's radius?"));
  let equation1 = readline.question("Do you want Surface Area or Volume? A(Surface Area) or V(Volume)");
  if (equation1 == "A") {
    console.log(2 * Math.PI * radiusC * heightC + 2 * Math.PI * radiusC ** 2 + " is the Surface Area");
  } else{
    console.log(Math.PI * radiusC ** 2 * heightC + " is the Volume");
  }
} else if (shape == "S") {
  let radiusS = parseInt(readl.question("What is the Sphere's radius?"))
  let equation2 = readline.question("Do you want Surface Area or Volume? A(Surface Area) or V(Volume)");
  if (equation2 == "V") {
    console.log( 1.3333 * Math.PI * radiusS ** 3 + " is the Volume");
  } else{
    console.log(4 * Math.PI *radiusS ** 2+ " is the Surface Area");
  }
