function calcularMaças(qtd){
    let resultado = 0;
    const VALOR_ATE_DUZIA = 0.30;
    const VALOR_MAIOR_DUZIA = 0.25;
    if (qtd > 1 && qtd < 12){
        resultado = qtd * VALOR_ATE_DUZIA;
    } else if ( qtd >= 12){
        resultado = qtd * VALOR_MAIOR_DUZIA;
    }
    console.log(`Você deverá pagar o valor de ${resultado} reais por ${qtd} maçãs.`);
}

let prompt = require("prompt-sync")();
let num = Number(prompt("Digite o número de maçãs que deseja comprar:"));
calcularMaças(num);