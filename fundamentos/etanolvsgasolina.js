/**
 * APP Etanol x Gasolina
 
 */
// pacote usado para entrada de dados via terminal
const read = require('readline-sync')
//pacote usado para formatar texto no console
const colors = require("colors")
//variavéis
let etanol
let gasolina
let resultado
//Limpar a tela do console
console.clear()

console.log("================================")
console.log("=====  Etanol vs Gasolina  =====")
console.log("================================")
console.log("")
//entrada
//Nunber() converte uma String em número
//.replace() trocar um caracteres por outro
etanol = Number(read.question("Digite o Valor da etanol: ").replace(",", "."))
gasolina = Number(read.question("Digite o valor da gasolina: ").replace(",", "."))
//Processamento/Saída
if (etanol < 0.7 * gasolina) {
    console.log("Abastecer com Etanol".green)
} else {
    console.log("Abastecer com Gasolina".red)
}





