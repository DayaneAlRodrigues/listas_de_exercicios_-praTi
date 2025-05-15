let prompt = require("prompt-sync")();
let nums = [];
for(let i = 0; i < 10; i++){
    let num = Number(prompt("Digite um número: "));
    nums.push(num);
}

for(let i=0 ; i<nums.length; i++){
    if(nums[i] %2 === 0){
        console.log(`O nùmero ${nums[i]} é par e está na posição ${i} do vetor `);
    }
}