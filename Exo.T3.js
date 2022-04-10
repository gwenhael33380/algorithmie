let readline = require("readline-sync");

let notes = [];

for( let index = 0; index < 9; index++) {
    notes[index] = readline.questionFloat("Saisir une note : ");
}

let ligne = "";
for( let i = 0; i < notes.length; i++) {
    ligne += notes[i] + " ";
}
console.log("Mes notes : [", ligne, "]");

console.log("Mes notes : [", ...notes, "]");
//console.log("Mes notes : [", notes[0], notes[1], ..., "]");

console.log("Nombre de notes : ", notes.length);

