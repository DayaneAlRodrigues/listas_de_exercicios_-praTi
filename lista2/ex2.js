let prompt = require ("prompt-sync")();

let velocidade = Number(prompt("Digite um número que representa a velocidade do carro: "));
const LIMITE = 80;
const MULTA_POR_KM = 5;

if(velocidade > LIMITE){
    let multa = (velocidade - LIMITE ) * MULTA_POR_KM;
    console.log(`Você foi multado e o valor da multa é: ${multa}.`)
}else {
    console.log("Você está dentro do limite de velocidade");
}