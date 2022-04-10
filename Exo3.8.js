let readline = require("readline-sync");


// declaration

let minute , heure;

// debut

heure = readline.questionInt("Saisir l'heure : ");
minute = readline.questionInt("Saisir les minutes : ");

minute ++;
if( minute == 60 )  {
    minute = 0;
    heure++;
}
if( heure == 24) {
    heure = 0;
}

console.log("Dans une minute il sera : " + heure + "h:" + minute +"m");


 
//fin