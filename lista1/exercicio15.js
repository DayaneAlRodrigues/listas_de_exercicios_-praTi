let fibonacci = [0,1];
let prox = 0;
for( let i = 2; i <= 10; i++){
    prox = fibonacci[i-1] + fibonacci[i - 2];
    fibonacci.push(prox);
}
console.table(fibonacci);