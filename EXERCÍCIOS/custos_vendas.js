/**
 * Calculo de Preço de Custo para Venda
 */
const read = require('readline-sync')

let Custo
let Lucro
let Venda

console.clear

console.log("===================================")
console.log("Calcular Margem de Lucro para Venda")
console.log("===================================")

Custo = Number(read.question("Digite o Valor do Custo: ").replace(",", "."))
Lucro = Number(read.question("Digite o valor do Lucro: ").replace(",", "."))

Venda = (Custo*Lucro) / 100

Venda += Custo

console.log (`Custo: ${Custo.toFixed(2)}`)
console.log (`Lucro: ${Lucro}%`)
console.log (`Venda: ${Venda.toFixed(2)}`)
