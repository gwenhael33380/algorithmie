let readline = require("readline-sync");


// declaration

let age, annePermis, nbAcc, anneAssu;
let cAgeSup25, cPermisPlus2ans, cAssurePlusDe5ans;
let niveauAssurance = 0;

// debut

age = readline.questionInt("Age ? :");
annePermis = readline.questionInt("Nombre d'annee de permis ? :");
nbAcc = readline.questionInt("Nombre d'accident responssable ? :");
anneAssu = readline.questionInt("Nombre d'annee assure chez nous ? :");

cAgeInf25 = (age < 25);
cPermisMoins2ans = (annePermis < 2);
cAssurePlusDe5ans = (anneAssu > 5);

if (cAgeInf25) {
    niveauAssurance++;
}

if (cPermisMoins2ans) {
    niveauAssurance++;
}

// faire jouer le nombre d'accident
niveauAssurance += nbAcc;

// bonus ancieneté
if ((niveauAssurance < 3) && cAssurePlusDe5ans) {
    niveauAssurance--;
}

switch (niveauAssurance) {
    case -1:
        console.log('On vous propose le niveau "Bleu"');
        break;

    case 0:
        console.log('On vous propose le niveau "Vert"');
        break;

    case 1:
        console.log('On vous propose le niveau "Orange"');
        break;

    case 2:
        console.log('On vous propose le niveau "Rouge"');
        break;

    default:
        console.log('On ne vous assure pas !!!');
        break;
}



//fin