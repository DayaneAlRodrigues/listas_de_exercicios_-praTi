let prompt = require("prompt-sync")();
let num = 0;
let num2 = 0;
do{
    num = Number(prompt("Digite um valor: "));
    num2 = Number(prompt("Digite outro valor: "));
}while(num == num2)

num > num2 ?
    console.log(`${num2} , ${num}`) :
    console.log(`${num} , ${num2}`);

