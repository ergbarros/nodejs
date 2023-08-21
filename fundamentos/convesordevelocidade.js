/**
 * Conversor de Velocidade
 * Milhas para Km/h
 */

const read = require('readline-sync')

//variáveis
let Milhas
let km
console.clear  

console.log("=================================")
console.log("==== Conversor de Velocidade ====")
console.log("======= Milhas Para Km/h ========")
console.log("=================================")

console.log("") 
Milhas = Number(read.question("Digite a Velocidade em Milhas: "))
Km = (Milhas*1.60934)

console.log

console.log("=================================")
console.log("=====Velocidade Convertida=======")
console.log(`Velocidade em Km/h: ${Km.toFixed(2)} km/h`)
console.log("=================================")