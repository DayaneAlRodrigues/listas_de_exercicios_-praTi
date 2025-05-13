let prompt = require("prompt-sync")();
let option = Number(prompt("Digite 1 para carro popular e 2 para carro de luxo: "))
let dias = Number(prompt("Quantos dias foi alugado o carro: "));
let km = Number(prompt("Quantos km foram percorridos? "));
let preco = 0;

const PRECO_DIA_POPULAR = 90;
const PRECO_DIA_LUXO = 150;

switch(option){
    case 1: 
        if(km <= 100){
            preco = (km * 0.2) + (PRECO_DIA_POPULAR * dias);
        } else {
            preco = (km * 0.1) + (PRECO_DIA_POPULAR * dias);
        }
        break;
    case 2:
        if(km <= 200){
            preco = (km * 0.3) + (PRECO_DIA_LUXO * dias);
        } else {
            preco = (km * 0.25) + (PRECO_DIA_LUXO * dias);
        }
        break;
    default:
        console.log("Opção inválida!");
        preco = 0;
}

console.log(`O cliente deve pagar R$${preco}`)