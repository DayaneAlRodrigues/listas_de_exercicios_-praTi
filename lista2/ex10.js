let prompt = require("prompt-sync")();
let nums = [];
let option = "";
do{
    let num = Number(prompt("Digite um número:"));
    nums.push(num);
    option = prompt("Digite S para continuar e N para parar:")
}while(option === "S")

const SOMA = nums.reduce((acc, currentValue) => {
    return acc + currentValue;
},0);

const MENOR = nums.reduce((menor, atual) => {
    return atual < menor ? atual : menor;
});

const MEDIA = SOMA / nums.length;

const PARES = nums.reduce((acc,atual) => {
    return atual % 2 === 0 ? ++acc : acc;
},0);

console.log(`A soma dos números informados é ${SOMA}. 
O menor número digitado é ${MENOR}.
A média entre os valores é ${MEDIA}.
${PARES} são pares.`)