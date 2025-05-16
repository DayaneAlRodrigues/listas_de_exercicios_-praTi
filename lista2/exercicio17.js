let prompt = require("prompt-sync")();
let nomes = [];
let idades = [];
for (let i = 0; i< 9; i++){
    let nome = prompt("Digite um nome: ");
    let idade= Number(prompt("Digite a idade dessa pessoa: "));
    nomes.push(nome);
    idades.push(idade);
}

for(let i=0; i< idades.length; i++){
    if(idades[i] < 18){
        console.log(`${nomes[i]} tem ${idades[i]} anos.`);
    }
}