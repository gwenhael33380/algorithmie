let readline = require("readline-sync");


// declaration
let n = 0;

// debut
do {
    n = readline.questionInt("Saisir un nombre entre 1 et 3 :");
    if(( n < 1 ) || ( n > 3 )) {
        console.log("Erreur de saisie ... recommencer !");
    }

} while (( n < 1 ) || ( n > 3 ))

console.log("! Gagné !");

//fin