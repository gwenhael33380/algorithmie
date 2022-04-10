let readline = require("readline-sync");





// declaration
let n = 0;
let max = 0;
let index = 0;

// debut
do {
    n = readline.questionInt(`(${index+1}) - Saisir nombre :`);
    if ( n != 0 ) {
        if( ( index == 0 ) || (n > max)) {
            max = n;
        }
        index++;
    }
} while ( n != 0 )

console.log("Le plus gand nombre saisi était : " + max );


//fin