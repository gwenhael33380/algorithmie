let readline = require("readline-sync");


// declaration
let sommeDue = 0;
let montantArticle = 0;
let montantVerse = 0;
let reste = 0;
let nbBillet10E = 0;
let nbBillet5E = 0;
let index = 1;

// debut
do {
    montantArticle = readline.questionInt(`(${index}) - Saisir montant de l'article :`);
    sommeDue += montantArticle;
} while ( montantArticle != 0 )

if( sommeDue == 0 ) {
    console.log("Vous ne nous devez rien ...");
} else {
    console.log("Vous nous devez " + sommeDue + " €");

    montantVerse = readline.questionInt("Combien payez vous ? ");

    // calcul rendu de monnaie
    reste = montantVerse - sommeDue;
    while( reste >= 10) {
        reste -= 10;
        nbBillet10E++;
    }
    while( reste >= 5) {
        reste -= 5;
        nbBillet5E++;
    }
    console.log("Rendue de monnaie :");
    console.log("    Billet de 10 € : " + nbBillet10E);
    console.log("    Billet de  5 € : " + nbBillet5E);
    console.log("    Piece de 1 €   : " + reste);

}

//fin