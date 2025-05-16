let prompt = require("prompt-sync")();

let option = Number(prompt("Digite 1 para ler o salário e o gênero e digite 2 para sair:"));


let listaFuncionarios = [];

function lerFuncionarios(){
    let option;
    do{
        let salario = Number(prompt("Digite seu salário: "));
        let genero = prompt("Digite M para masculino e F para feminino:");
        listaFuncionarios.push({
            salario: salario,
            genero : genero
        });
        option = Number(prompt("Digite 1 para continuar e 2 para sair:"));
    }while (option != 2)
}

function contarSalariosPorGenero (listaFuncionarios){
    let totalSalarioHomens = 0;
    let totalSalarioMulheres = 0;
    let totalHomens = 0;
    let totalMulheres = 0;

    listaFuncionarios.forEach(funcionario =>{
        if(funcionario.genero ==="M"){
            totalSalarioHomens += funcionario.salario;
            totalHomens ++;
        }else {
            totalSalarioMulheres += funcionario.salario;
            totalMulheres++;
        }
    })
    return console.log(`A empresa tem ${totalMulheres} mulheres e paga o total de ${totalSalarioMulheres} para elas e tem ${totalHomens} homens e paga o total de ${totalSalarioHomens} para eles.`)
}

switch(option){
    case 1:
        lerFuncionarios();
        contarSalariosPorGenero(listaFuncionarios);
        break;
    case 2:
        console.log("Saiu");
        break;
    default:
        console.log("Opção inválida!")
}
