// Leia 10 números inteiros via teclado
//  e mostre na tela quantos números são pares e quantos número são ímpares

const leia = require('readline-sync')

let numero
let pares = 0
let impares = 0

for(let i = 1; i <= 10; i++) {
    numero = leia.questionInt(`Digite o ${i} numero: `);

    14
    if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("\nTotal de números pares: " + pares);
console.log("Total de números ímpares: " + impares);

 


