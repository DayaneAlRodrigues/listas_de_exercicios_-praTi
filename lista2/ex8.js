let prompt = require("prompt-sync")();
let horas = Number(prompt("Digite quantas horas de atividade física você realiza por mês: "))
let pontos = 0;
if(horas <= 10){
    pontos = horas * 2;
} else if (horas > 10 && horas <= 20){
    pontos = horas * 5;
}else {
    pontos = horas *10;
}
let totalRecebido = pontos * 0.5;
console.log(`Você recebeu ${pontos} pontos por mês e arrecadou ${totalRecebido}.`)