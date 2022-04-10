// declaration
let index = 0;
let indexTable = 0;
let ligne = "";

// debut

console.log(" +---------------+---------------+---------------+---------------+---------------+");
console.log(" | Table des  1  | Table des  2  | Table des  3  | Table des  4  | Table des  5  |");
console.log(" +---------------+---------------+---------------+---------------+---------------+");


// table de 1 à 5
for( index = 0; index <= 10; index ++ ) {
    ligne = " ";
    for( indexTable = 1; indexTable <= 5; indexTable++) {
        ligne += `| ${indexTable.toString().padStart(2, " ")} x ${index.toString().padStart(2, " ")} = ${(indexTable * index).toString().padStart(3, " ")} `;
    }
    ligne += "|";
    console.log(ligne);
}

console.log(" +---------------+---------------+---------------+---------------+---------------+");
console.log(" | Table des  6  | Table des  7  | Table des  8  | Table des  9  | Table des 10  |");
console.log(" +---------------+---------------+---------------+---------------+---------------+");

// table de 6 à 10
for( index = 0; index <= 10; index ++ ) {
    ligne = " ";
    for( indexTable = 6; indexTable <= 10; indexTable++) {
        ligne += `| ${indexTable.toString().padStart(2, " ")} x ${index.toString().padStart(2, " ")} = ${(indexTable * index).toString().padStart(3, " ")} `;
    }
    ligne += "|";
    console.log(ligne);
}

console.log(" +---------------+---------------+---------------+--------------+----------------+");


//fin