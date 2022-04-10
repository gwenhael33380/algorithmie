let readline = require("readline-sync");


// declaration
const NB_SUIVANT = 10;
let n = 0;
let i = 1;

// debut
n = readline.questionInt(`Saisir un nombre :`);

// for( let i = 1; i <= NB_SUIVANT; i++) {
//     console.log(n + i);
// }

while ( i <= NB_SUIVANT ) {
    console.log( n + i );
    i++;
}

console.log("!! Fin !!");

//fin