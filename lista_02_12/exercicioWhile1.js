// leia a idade de várias pessoas (números inteiros)via teclado
// mostre na tela o total de pessoas cuja idade seja menor que 21 anos 
// o total de pessoas cuja idade, seja maior que 50 anos. 
// A leitura dos dados deve ser finalizada ao digitar uma idade negativa

const leia = require('readline-sync'); //Permite ler dados digitados pelo usuário

let idade = 0;          //guarda a idade que o usuário digitar
let idade21 = 0;        // contador de pessoas com menos de 21 anos
let idade50 = 0;        //contador de pessoas com mais de 50 anos

while(idade >= 0) {           // O while repete enquanto a idade for maior ou igual a 0, digitando uma idade negativa, o programa PARA.
    idade = leia.questionInt("Digite a sua idade: ")        //O que ele digita vai para a variável idade
    
    if(idade >= 0 && idade < 21) {            // se a idade não for negativa e menor que 21:
        idade21++;                           //soma +1 ao contador idade

    } else if (idade > 50){   //E se a idade for maior que 50:
         idade50++             //soma +1 ao contador idade50
    
    }        
                     
}
console.log("Total de pessoas menores de 21 anos: " + idade21);
console.log("Total de pessoas menores de 50 anos: " + idade50);

