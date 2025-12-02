// leia um número inteiro via teclado
//  mostre na tela uma mensagem indicando se este número é par ou ímpar
//   se o número é positivo ou negativo.


const leia = require('readline-sync');

let numero = leia.questionInt("Digite um numero: ");

let tipo = (numero % 2 === 0) ? "par" : "ímpar";
let sinal = (numero >= 0) ? "positivo" : "negativo";

console.log(`O Número ${numero} é ${tipo} e ${sinal}!`);
