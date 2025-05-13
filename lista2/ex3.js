let prompt = require ("prompt-sync")();

let distancia = Number(prompt("Digite a distância que você deseja percorrer em km: "));
let preco = 0;
if(distancia <= 200){
    preco = distancia * 0.5;
    console.log(`O preço da passagem é ${preco}`);
}else {
    preco = distancia * 0.45;
    console.log(`O preço da passagem é ${preco}`);
}