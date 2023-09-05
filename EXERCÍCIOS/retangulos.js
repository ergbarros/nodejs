/**
 * Cálculo da área e perimetro de retangulo
 */

const read = require('readline-sync')

let base, altura, area, perimetro

console.clear()

console.log      ("retângulo")
console.log("")
console.log(" ___________________")
console.log("|                   |")
console.log("|                   |")
console.log("|                   |")
console.log("|___________________|")

altura = Number(read.question("Digite o valor da altura: ").replace(",", "."))
base = Number(read.question("Digite o valor da base:").replace(",", "."))

area = base * altura

perimetro = base + altura + base + altura

console.log (`Àrea do Retangulo: ${area.toFixed(2)} Metros quadrados`)
console.log (`Perimetro do Retangulo: R$ ${perimetro.toFixed(2)} Metros`)


