let prompt = require("prompt-sync")();
let num = 0;
let soma = 0;
for(let i = 0; i < 5; i++){
    num = Number(prompt("Digite um número: "));
    soma +=num;
}

console.log(soma);