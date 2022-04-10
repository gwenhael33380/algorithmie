let readline = require("readline-sync");

// declaration de fonction 
function factoriel( n ) {
    let retour = 1;

    for( let i = 2; i <= n; i++) retour *= i;

    return retour;
}

// declaration
let nbChevPartant = 0;
let nbChevJoue = 0;
let index = 0;

// debut

nbChevPartant = readline.questionInt("Nombre de cheveaux partants : ");
nbChevJoue = readline.questionInt("Nombre de chevaux joues : ");

console.log("Dans l'ordre, une chance sur ", factoriel(nbChevPartant) / factoriel(nbChevPartant - nbChevJoue));
console.log("Dans le desordre, une chance sur ", factoriel(nbChevPartant) / (factoriel(nbChevJoue) *  factoriel(nbChevPartant - nbChevJoue)));

//fin