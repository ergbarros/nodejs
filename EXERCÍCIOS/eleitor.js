/**
 * Eleitor - obrigatoriedade e votar
 */
const read = require('readline-sync')

let idade

console.clear()
console.log("-------------------------")
console.log("---------Eleitor---------")
console.log("-------------------------")
console.log("")
idade = Number(read.question("Digite a sua Idade: ").replace(",", "."))

if (idade < 16) {
    console.log("PROIBIDO VOTAR")
} else if (idade > 17 && idade < 71) {
    console.log("OBRIGATÓRIO VOTAR")
} else {
    console.log("VOTA FACULTATIVO")
}


