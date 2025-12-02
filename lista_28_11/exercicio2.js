// leia 4 notas de um participante, exiba na tela a média final do participante


const leia = require('readline-sync');

let nota1, nota2, nota3, nota4, media;

console.log("Digite a primeira nota:");
nota1 = leia.questionFloat();

console.log("Digite a segunda nota:");
nota2 = leia.questionFloat();

console.log("Digite a terceira nota:");
nota3 = leia.questionFloat();

console.log("Digite a quarta nota:");
nota4 = leia.questionFloat();

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("\nA média final é: " + media);
