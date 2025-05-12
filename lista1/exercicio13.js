let prompt = require("prompt-sync")();
let num = Number(prompt("Digite um número: "));
let array = [];
array.push(num);
let cont = 0;
    
while(num != 0) {
    num = Number(prompt("Digite um número: "));
    array.push(num);
    cont ++;
}

let soma = 0;
for(let i = 0; i< array.length;i++){
    soma += array[i];
}

let media = soma / cont ;
console.log(`A média aritmética dos números fornecidos é ${media}`);
