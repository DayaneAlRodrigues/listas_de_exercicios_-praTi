let prompt = require("prompt-sync")();
let num = 0;

do {
    num = Number(prompt("Digite um número: "));
    
}while(num === 0)