// Ler 3 valores inteiros A, B e C.
// Calcular A + B e comparar com C dizendo se é maior, menor ou igual.



const leia = require('readline-sync');

let A, B, C, soma;

console.log("Digite o número A:");
A = leia.questionInt();

console.log("Digite o número B:");
B = leia.questionInt();

console.log("Digite o número C:");
C = leia.questionInt();

soma = A + B;

console.log(`${A} + ${B} = ${soma}`);


if (soma > C) {
    
    console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
    
    console.log("A Soma de A + B é Menor do que C");
} else {
    
    console.log("A Soma de A + B é Igual a C");
}
