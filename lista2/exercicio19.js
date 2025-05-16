let p = require("prompt-sync")();
let horarios = [];
for(let i = 0 ; i < 5; i++){
    console.log(`Digite o ${i + 1}º horário:`);
    let hora= Number(p("Digite a hora: "));
    let minutos = Number(p("Digite os minutos: "));
    let segundos = Number(p("Digite os segundos: "));

    let horario = {
        hora: hora,
        minutos: minutos,
        segundos: segundos
    }
    horarios.push(horario);
}

console.log("Horários digitados:");
horarios.forEach(horario => {
    const horaf = String(horario.hora).padStart(2, "0");
    const minF = String(horario.minutos).padStart(2,"0");
    const segF = String(horario.segundos).padStart(2,"0");
    console.log(`${horaf}:${minF}:${segF}`);
})