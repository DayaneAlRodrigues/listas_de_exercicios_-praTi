/*1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

let prompt = require ("prompt-sync")();

let numDeCigarrosPorDia = Number(prompt("Digite um número que representa a quantidade de cigarros fumados por dia: "));
let anosFumando = Number(prompt("Quanto anos você fumou?  "));

const MINUTOS_POR_CIGARRO = 10;
const HORA = 60;
const DIA = 24;

// total de cigarros fumados
let totalCigarros = numDeCigarrosPorDia * DIA * anosFumando;

// calculo de total de minutos perdidos por cigarro
let totalMin = totalCigarros * MINUTOS_POR_CIGARRO;

//calculo para converter o total de minutos perdidos para dias
let totalDiasPerdidos = totalMin/HORA * DIA;

console.log(`Ao fumar ${numDeCigarrosPorDia} cigarros por dia durante ${anosFumando} anos, você perdeu um total de ${totalDiasPerdidos.toFixed(2)} dias de vida.`);

