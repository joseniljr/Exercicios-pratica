// leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador
// exiba na tela o Salário Líquido


const leia = require('readline-sync');

let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido;

console.log("Digite o salário bruto:");
salarioBruto = leia.questionFloat();

console.log("Digite o adicional noturno:");
adicionalNoturno = leia.questionFloat();

console.log("Digite as horas extras:");
horasExtras = leia.questionFloat();

console.log("Digite os descontos:");
descontos = leia.questionFloat();

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("\nSalário Líquido: " + salarioLiquido);
