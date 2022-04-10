let readline = require("readline-sync");

// declaration

let age;

// debut

    age = readline.questionInt("Age de votre enfant ? :");

    if( age >= 12) {
        console.log("Cadet");
    } else if ( age >= 10) {
        console.log("Minime");
    } else if ( age >= 8) {
        console.log("Pupille");
    } else if ( age >= 6) {
        console.log("Poussin");
    } else {
        console.log("Votre enfant est trop jeune !!");
    }

// fin