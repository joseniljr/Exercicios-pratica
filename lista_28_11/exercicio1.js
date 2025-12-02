const leia = require('readline-sync');

let salario, abono, novoSalario;

console.log("Digite o salário:");
salario = leia.questionFloat();

console.log("Digite o abono:");
abono = leia.questionFloat();

novoSalario = salario + abono;

console.log("O novo salário é: " + novoSalario);
