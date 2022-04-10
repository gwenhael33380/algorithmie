let readline = require("readline-sync");


// declaration
let nbChevPartant = 0;
let nbChevJoue = 0;
let index = 0;
let factN, factNmoinsP, factP;

// debut

nbChevPartant = readline.questionInt("Nombre de cheveaux partants : ");
nbChevJoue = readline.questionInt("Nombre de chevaux joues : ");

// calcul factoriel n
factN = 1;
for( index = 2; index <= nbChevPartant; index++) factN *= index;

// calcul factoriel p
factP = 1;
for( index = 2; index <= nbChevJoue; index++) factP *= index;

// calcul factoriel n - p
factNmoinsP = 1;
for( index = 2; index <= nbChevPartant - nbChevJoue; index++) factNmoinsP *= index;

console.log("Dans l'ordre, une chance sur ", factN / factNmoinsP);
console.log("Dans le desordre, une chance sur ", factN / (factP *  factNmoinsP));

//fin