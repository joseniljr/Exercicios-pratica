    // Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
     // construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número 
     // e o programa deve exibir na tela a posição deste número no vetor. 
    // // Caso o número não seja encontrado, a mensagem: “Não foi encontrado!



const leia = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let encontrado = false;
let posicao = -1;

let numero = leia.questionInt("Digite o numero que voce deseja encontrar: ");

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        encontrado = true;
        posicao = i;
        break; 
    }
}

if (encontrado) {
    console.log(`O número ${numero} está localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}
