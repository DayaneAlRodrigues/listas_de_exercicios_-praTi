let p = require("prompt-sync")();
console.log("---Registre o funcionário---")

let funcionario = {
    nome: "",
    cargo: "",
    salario: 0
}
funcionario.nome = p("Digite o nome do funcionário:");
funcionario.cargo = p("Digite o cargo");
funcionario.salario = Number(p("Digite o salário: "));

console.log(funcionario);