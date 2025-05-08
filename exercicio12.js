let prompt = require("prompt-sync")();
let num = Number(prompt("Digite um número: "));

for (let i = 1 ; i < 11; i++){
    console.log(`${i} X ${num} = ${i*num}`);
}