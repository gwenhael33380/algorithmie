
let tab1 = [ 1, 2, 3 ];
let tab2 = [ 0, 1 ];

let sommeProd = 0;

for(let i = 0; i < tab1.length; i++) {
    for(let j = 0; j < tab2.length; j++) {
        sommeProd += tab1[i] * tab2[j];
    }
}

console.log("Tab1 : ", tab1);
console.log("Tab2 : ", tab2);
console.log("La somme prod des deux tableau est de : ", sommeProd);
