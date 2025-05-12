/* Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

let prompt = require('prompt-sync')();

let idade = Number(prompt("Digite sua idade: "));

if (idade < 12){
    console.log("Criança");
} else if (idade >= 12 && idade < 18){
    console.log("Adolescente");
} else if (idade >= 18 && idade < 60){
    console.log("Adulto");
} else {
    console.log("Idoso");
}