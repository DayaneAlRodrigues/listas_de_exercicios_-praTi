let prompt = require ("prompt-sync")();

let num = Number(prompt("Digite um número de 1 a 5: "));

let sorteio = Math.floor(Math.random() * 5 + 1);

(num === sorteio ) ? console.log("Você acertou!") : console.log("Você errou, o número sorteado foi: " + sorteio );