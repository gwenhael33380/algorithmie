let readline = require("readline-sync");


// declaration
let n = 0;
let index = 0;

// debut
n = readline.questionInt(`Saisir un nombre :`);

console.log("Table de ", n, " :");

for( index = 1; index <= 10; index++) {
    console.log(`${n.toString().padStart(2, " ")} x ${index.toString().padStart(2, " ")} = ${(n * index).toString().padStart(2, " ")}`);
}

//fin