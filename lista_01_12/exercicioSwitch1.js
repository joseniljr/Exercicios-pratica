// Escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6)
// a quantidade comprada deste item (número inteiro) 
// mostre na tela o valor total da conta e o nome do produto que foi comprado


const leia = require('readline-sync');

let codigo, quantidade, produto, preco, valorTotal;

console.log("Código do Produto (1 a 6):");
codigo = leia.questionInt();

console.log("Quantidade:");
quantidade = leia.questionInt();

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10;
        break;

    case 2:
        produto = "X-Salada";
        preco = 15;
        break;

    case 3:
        produto = "X-Bacon";
        preco = 18;
        break;

    case 4:
        produto = "Bauru";
        preco = 12;
        break;

    case 5:
        produto = "Refrigerante";
        preco = 8;
        break;

    case 6:
        produto = "Suco de Laranja";
        preco = 13;
        break;

    default:
        console.log("❌ Código inválido!");
        return; 
}

valorTotal = quantidade * preco;

console.log("\nProduto: " + produto);
console.log("Valor total: R$ " + valorTotal);
