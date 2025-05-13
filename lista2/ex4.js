let prompt = require ("prompt-sync")();

let retaA = Number(prompt("Digite o tamanho do segmento de reta: "));

let retaB = Number(prompt("Digite o tamanho do segmento de reta: "));

let retaC = Number(prompt("Digite o tamanho do segmento de reta: "));

if ( (retaA < (retaB + retaC)) && (retaB < (retaA + retaC)) && (retaC < (retaA + retaB))){
    console.log("Os comprimento de reta formam um triângulo");
} else {
    console.log("Os segmentos de reta não formam um triângulo.");
}