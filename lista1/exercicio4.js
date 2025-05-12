/* Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

let prompt = require("prompt-sync")();

console.log("Digite 1 para fazer um pedido");
console.log("Digite 2 para fazer uma reclamação");
console.log("Digite 3 para encerrar a chamada");

let num = 0;

let option = Number(prompt("Digite sua opção desejada: "));

switch (option){
    case 1:
        num = Number(prompt("Digite 1 para pedir uma pizza ou 2 para pedir uma promoção: "));
        (num === 1)? console.log("Sua pizza está a caminho"): console.log("Sua promoção está a caminho");
        break;
    case 2:
        num = Number(prompt("Digite 1 para falar com um de nossos atendentes ou 2 para retornamos sua ligação em outro momento: "));
        (num === 1) ? console.log("Sua chamada está sendo encaminhada"): console.log("Logo iremos retornar sua ligação");
        break; 
    case 3:
        console.log("Obrigado pela sua ligação!");
        break;
}

