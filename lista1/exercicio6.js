function IsTriangle(a,b,c){
    if(a < b+c && b < a+c && c < a+b){
        return typeTriangle(a,b,c);
    } 
    console.log("Os dados fornecidos não formam um triângulo");
}

function typeTriangle(a,b,c){
    if ( a == b && b == c){
        console.log("O triângulo é equilátero!");
    } else if(a == b || a == c || c == b){
        console.log("O triângulo é isósceles!");
    } else if ( a != b & b != c){
        console.log("O triângulo é escaleno!");
    } 
}

let prompt = require("prompt-sync")();
let a = Number(prompt("Digite um lado do triangulo:"));
let b = Number(prompt("Digite segundo lado do triangulo:"));
let c = Number(prompt("Digite terceiro lado do triangulo:"));
IsTriangle(a,b,c);