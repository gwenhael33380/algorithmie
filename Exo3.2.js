let readline = require("readline-sync");

// declaration

let n1, n2;

// debut

    n1 = readline.questionInt("Saisir un premier nombre :");
    n2 = readline.questionInt("Saisir un deuxieme nombre : ");

    if( n1 == 0 || n2 == 0) {
        console.log("Le produit est null");
    } else if (((n1 > 0) && (n2 > 0)) || ((n1 < 0) && (n2 < 0))) {
        console.log("Le produit est positif");
    } else {
        console.log("Le produit est négatif");
    }


// fin