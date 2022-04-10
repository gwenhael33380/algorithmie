const NB_NOTE = 4

let readline = require("readline-sync");

let notes = [];
let somme = 0;

for( let index = 0; index < NB_NOTE; index++) {
    notes[index] = readline.questionFloat("Saisir une note : ");
    somme += notes[index];
}

console.log("Mes notes : [", ...notes, "]");
console.log("Nombre de notes : ", notes.length);
console.log("Votre moyenne est de ", somme / notes.length);

// solution avec "reducer"
console.log("Somme : ", somme);

function maFonction(acc, courant) { 
    return acc + courant;
}
console.log("Somme bis : ", notes.reduce(maFonction)); 

let maFonction2 = function(acc, courant) { return acc + courant;};
console.log("Somme bis : ", notes.reduce(maFonction2)); 
console.log("Somme bis : ", notes.reduce(function(acc, courant) { return acc + courant;})); 
console.log("Somme bis : ", notes.reduce((acc, courant) => acc + courant)); 

