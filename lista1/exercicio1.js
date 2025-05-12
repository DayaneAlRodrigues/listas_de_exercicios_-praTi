// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
let prompt = require ("prompt-sync")();

let num = Number(prompt("Digite um número: "));

(num % 2 == 0 )? console.log(`O número ${num} é par.`):console.log(`O número ${num} é ímpar.`);