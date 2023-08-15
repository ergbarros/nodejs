/**
 * Regua de Três (Calculo de porcentagem) 
 */

const read = require('readline-sync')
//variáveis

let x, y, valor
console.clear()
console.log("==============================")
console.log("======= Regua de Três ========")
console.log("======= x% fr y = Valor ======")
console.log("==============================")
console.log("")

//entrada

x = Number(read.question("digite o valor de x : "))
y = Number(read.question("digite o valor de y : "))

//processamento
valor = (x * y) / 100

//saida
console.log(`${x}% de ${y} = ${valor}`)



