let readline = require("readline-sync");


// declaration
const NB_VALUE = 4
let n = 0;
let max = 0;
let listeDesIndexMax = "";

// debut
for( let index = 0; index < NB_VALUE; index++) {
    n = readline.questionInt(`(${index+1}/${NB_VALUE}) - Saisir nombre :`);
    if( ( index == 0 ) || (n >= max)) {
        max = n;
        listeDesIndexMax += (index + 1) + ",";
    }
}

console.log("Le plus gand nombre saisi était : " + max );
console.log("Il a été saisi en position : " + listeDesIndexMax );


//fin