let primeiro = 0;
let segundo = 1;
let prox = primeiro + segundo;
console.log(primeiro);
console.log(segundo);
console.log(prox);
let temp = 0;

for(let i = 0 ; i <8; i++){
     temp = segundo + prox;
     segundo = prox;
     prox = temp;
     console.log(prox);
}