let readline = require("readline-sync");


// declaration
const MIN = 10;
const MAX = 20;
let n = 0;

// debut
do {
    n = readline.questionInt(`Saisir un nombre entre ${MIN} et ${MAX} :`);
    if( n < MIN ) {
        console.log("Trop petit !");
    } else if ( n > MAX ) {
        console.log("Trop grand !");
    }

} while (( n < MIN ) || ( n > MAX ))

console.log("!! Gagné !!");

//fin