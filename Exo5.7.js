let readline = require("readline-sync");


// declaration
let n = 0;
let index = 0;
let fact = 1;

// debut
n = readline.questionInt(`Saisir un nombre :`);

console.log("Le factoriel de ", n, " est égal à ");

for( index = 1; index <= n; index++) {
    fact *= index;
}
console.log(fact);

//fin