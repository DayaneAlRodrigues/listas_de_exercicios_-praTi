let prompt = require("prompt-sync")();
let nomes = [];
for (let i = 0 ; i < 7; i++){
    let nome = prompt("Digite um nome:");
    nomes.unshift(nome);
}
console.table(nomes);