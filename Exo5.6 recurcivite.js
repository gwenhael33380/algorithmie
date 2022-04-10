let readline = require("readline-sync");


function sommeN( n ) {
    if( n <= 0 ) {
        return 0;
    } else {
        return n + sommeN( n - 1 );
    }
}

// debut
n = readline.questionInt(`Saisir un nombre :`);

console.log("La somme des entiers de 1 à ", n, " est de ", sommeN( n ));

//fin