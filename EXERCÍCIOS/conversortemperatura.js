/**
 * conversor de temperatura
 * Fahrenheit para Celsius
 */

const read = require('readline-sync')
//variáveis
let c,f
console.clear
console.log("=================================")
console.log("==== Conversor de Temperatura ===")
console.log("==== Fahrenheit para Celsius ==== ")
console.log("=================================")
//entrada
f = Number(read.question("digite a Temperatura em Fahrenheit: "))
//processamento
c = (f-32) / 1.8
//saida

console.log (`Temperatura em Celsius: ${c.toFixed(1)}ºC`)
