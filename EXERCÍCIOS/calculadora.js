3.90/**
 * Calcular Consumo de tecido
 */
// pacote usado para entrada de dados via terminal
const read = require('readline-sync')

//pacote usado para formatar texto no console
const colors = require("colors")

//variavéis
let largura
let comprimento
let metragemconsumo
let valordometro
let consumo

//Limpar a tela do console
console.clear()

console.log("=======================================")
console.log("======Consumo de tecido por Calça======")
console.log("======Valor do consumo por Calça ======")
console.log("=======================================")
console.log("")

//entrada
//Nunber() converte uma String em número
//.replace() trocar um caracteres por outro
largura = Number(read.question("Digite a largura do tecido: ").replace(",", "."))
comprimento = Number(read.question("Digite o consumo de tecido: R$: ").replace(",", "."))
valordometro = Number(read.question("Digite o Valor do metro do tecido: ").replace(",", "."))

//Processamento/Saída

metragemconsumo= (largura*comprimento) 
valordometro = (metragemconsumo*valordometro/largura)

console.log (`Metragem consumo por calça: ${metragemconsumo.toFixed(2)} Metros`)
console.log (`Valor do Consumo de tecido: R$ ${valordometro.toFixed(2)}`)







