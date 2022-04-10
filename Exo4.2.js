let readline = require("readline-sync");


// declaration

let sexe = "";
let age = 0;
let c1 = false;
let c2 = false;

// debut

sexe = readline.question("Sexe ? (H/F) :");
age = readline.questionInt("Age ? :");

c1 = ((sexe.toUpperCase() == "H") && (age > 20));
c2 = ((sexe.toUpperCase() == "F") && ((age >= 18) && (age <= 35)));

if( c1 || c2 ) {
    console.log("Vous êtes imposable");
} else {
    console.log("Vous n'êtes pas imposable");
}
 
//fin