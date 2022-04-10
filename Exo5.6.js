let readline = require("readline-sync");


// declaration
let n = 0;
let index = 0;
let somme = 0;

// debut
n = readline.questionInt(`Saisir un nombre :`);

console.log("La somme des entiers de 1 à ", n, " est de ");

for( index = 1; index <= n; index++) {
    somme += index;
}
console.log(somme);

//fin