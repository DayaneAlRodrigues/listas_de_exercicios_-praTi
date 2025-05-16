let jokenPo = ["Pedra", "Papel", "Tesoura"];

function obterElementoAleatorio(jokenPo) {
    const indiceAleatorio = Math.floor(Math.random() * jokenPo.length);
    return jokenPo[indiceAleatorio];
  }

let prompt = require ("prompt-sync")();

let option = prompt("Digite Pedra, Papel ou Tesoura: ");
let jogo = "";  
switch (option){
    case "Pedra":
        jogo = obterElementoAleatorio(jokenPo);
        if(option === jogo){
            console.log("Empate");
        } else if (jogo === "Papel"){
            console.log(`Você perdeu o jogo tirou ${jogo}`);
        }else if ( jogo === "Tesoura"){
            console.log(`Você ganhou o jogo tirou ${jogo}`);
        }
        break;
    case "Papel":
        jogo = obterElementoAleatorio(jokenPo);
        if(option === jogo){
            console.log("Empate");
        }else if (jogo === "Tesoura"){
            console.log(`Você perdeu o jogo tirou ${jogo}`);
        }else if ( jogo === "Pedra"){
            console.log(`Você ganhou o jogo tirou ${jogo}`);
        }
        break;
    case "Tesoura":
        jogo = obterElementoAleatorio(jokenPo);
        if(option === jogo){
            console.log("Empate");
        }else if (jogo === "Pedra"){
            console.log(`Você perdeu o jogo tirou ${jogo}`);
        }else if ( jogo === "Papel"){
            console.log(`Você ganhou o jogo tirou ${jogo}`);
        }
        break;

}