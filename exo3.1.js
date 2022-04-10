let readline = require("readline-sync");

// declaration
let maSaisie;

// debut

    maSaisie = readline.questionInt("Veuillez saisir un nombre :");

    if( maSaisie >= 0) {
        console.log("Le nombre " + maSaisie + " est positif ou null");
    } else {
        console.log("Le nombre " + maSaisie + " est strictement négatif");
    }

// fin