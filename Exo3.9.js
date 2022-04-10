let readline = require("readline-sync");

// declaration

let seconde, minute , heure;

// debut

heure = readline.questionInt("Saisir l'heure : ");
minute = readline.questionInt("Saisir les minutes : ");
seconde = readline.questionInt("Saisir les secondes : ");

seconde ++;
if( seconde == 60 )  {
    seconde = 0;
    minute++;
}
if( minute == 60 )  {
    minute = 0;
    heure++;
}
if( heure == 24) {
    heure = 0;
}

console.log("Dans une seconde il sera : " + heure + "h:" + minute +"m" + seconde +"s");
 
//fin
