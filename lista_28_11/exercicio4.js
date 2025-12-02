const Leia = require('readline-sync')

let n1, n2, n3, n4, resultado

console.log('Digite o primeiro numero:');
n1 = Leia.questionInt()

console.log('Digite o segundo numero:');
n2 = Leia.questionInt()

console.log('Digite o terceiro numero:');
n3 = Leia.questionInt()

console.log('Digite o quarto numero:');
n4 = Leia.questionInt()

resultado = (n1 * n2) - (n3 * n4)
console.log('O resultado da diferença entre (n1*n2) - (n3*n4) é: ' + resultado);
