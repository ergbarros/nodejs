/**
 * Conversor de peso Libras Kg
 * Milhas para Km/h
 */

const read = require('readline-sync')

//variáveis
let Libras
let Kg

console.clear
console.log("=================================")
console.log("====== Conversor de Peso ========")
console.log("======= Libras Para Kg ==========")
console.log("=================================")

Libras = Number(read.question("Digite o Peso em Libras: "))

Kg = Libras / 2.2046

console.log

console.log("=================================")
console.log("==========Peso em Kilos==========")
console.log(`Peso em kg : ${Kg.toFixed(2)}`)
console.log("=================================")