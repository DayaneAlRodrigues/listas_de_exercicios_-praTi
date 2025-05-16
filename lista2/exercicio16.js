let vet = [];

for(let i= 0; i < 20; i++){
    vet.push(Math.floor(Math.random()* 99));
}

// usando burble sort 
let ordenou = false;
do{
    ordenou = false;
    for(let i = 1 ; i < vet.length; i++){
        if(vet[i - 1] > vet[i]){
        let temp = vet[i -1];
        vet[i - 1] = vet[i];
        vet[i] = temp;
        ordenou = true
        }
    }
}while (ordenou);

// usando método sort
// vet.sort(function(a, b) { return a - b;});



console.table(vet);