/**
 * Jogo JoKenPo- Pedra - Papel - Tesoura
 */

const read = require("readline-sync")
const colors = require("colors")

let jogador, computador

console.clear()
console.log("--- Jokenpo  ---")
console.log("")
console.log("1. PEDRA")
console.log("2. PAPEL")
console.log("3. TESOURA")

jogador = Number(read.question("Digite a opcao desejada: "))

//Logica do Jogador

switch(jogador){
    
    case 1: 
    console.log ("jogador escolheu pedra")
    break
    case 2: 
    console.log ("jogador escolheu papel")
    break
    case 3: 
    console.log ("jogador escolheu tesoura")
    break
    default:
    console.log("opcao invalida")
    break
}
//logica do computador
computador = Math.floor(Math.random() * 3 + 1) 

switch(computador){
    case 1: 
    console.log ("computador escolheu pedra")
    break
    case 2: 
    console.log ("computador escolheu papel")
    break
    case 3: 
    console.log ("computador escolheu tesoura")
    break
}
// Logica para determinar empate ou declarar o vencedor

if(jogador === computador) {
    console.log("EMPATE")
} else if ((jogador === 1 && computador === 3) || (jogador === 2 && computador === 1 || (jogador === 3
    && computador === 2)))
    {
        console.log ("Jogador Venceu")
    }else{
        console.log("Computador Venceu")
    }
