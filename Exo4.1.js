let readline = require("readline-sync");


// declaration

let nbPhotocopie = 0;
let prix = 0;

// debut

nbPhotocopie = readline.questionInt("Combien de photocopie souhaitez vous faire ? : ");

if (nbPhotocopie <= 10) {
    prix = nbPhotocopie * 0.1;    
} else if (nbPhotocopie <= 30) {
    prix = 1 + (nbPhotocopie - 10) * 0.09;
} else {
    prix = 2.8 + (nbPhotocopie - 30) * 0.08;
}

console.log("Vous devez : " + prix + " €");

 
//fin