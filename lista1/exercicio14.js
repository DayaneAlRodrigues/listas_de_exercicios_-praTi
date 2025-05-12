let prompt = require("prompt-sync")();
let num = Number(prompt("Digite um número: "));
let fatorial = 1;

for(let i = 1 ; i <= num; i++){ 
    fatorial *= i; 
}
console.log(`O fatorial do número ${num} é: ${fatorial}`);