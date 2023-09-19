/**
 * Exemplo de uso do laço for - Tabuada
 */

const read = require("readline-sync")
let valor

console.clear
console.log ("___________TABUADA___________")
valor = Number(read.question("Digite o valor da tabuada: "))

for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${valor*i}`)
}