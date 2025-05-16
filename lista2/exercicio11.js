let prompt = require("prompt-sync")();
let primeiroTermo = Number(prompt("Digite o primeiro termo da PA:"));
let razao = Number(prompt("Digite a razão da PA:"));
console.log(primeiroTermo);
let prox = primeiroTermo + razao;
console.log(prox);
for (let i = 0 ; i < 8 ; i++){
    prox += razao;
    console.log(prox);
}