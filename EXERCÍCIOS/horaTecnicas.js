/**
 * Cálculo do valor da hora de serviço
 */
const read = require('readline-sync')

//variáveis
let remuneracao, custo, horasMes, horaTecnica,
estimativa, total

console.clear
console.log("=================================")
console.log("====== Cálculo de Serviços ======")
console.log("=================================")
console.log("")

//Entrada1
remuneracao = Number(read.question(" Remureracao Mensal Pretendida: ").replace(",", "."))
horasMes = Number(read.question("Carga horario mensal de trabalho: ").replace(",", "."))
custo = Number(read.question(" Custo Operacional: ").replace(",", "."))

//Processamento1
horaTecnica = (remuneracao + (0.3 * remuneracao)+ custo + (0.2 * remuneracao)) / horasMes

//Saida1
console.log(`Hora Técnica: R$ ${horaTecnica.toFixed(2)}`)
console.clear()

//entrada2
estimativa = Number(read.question(" Estimativa de hora deste Servicos: ").replace(",", "."))
 
//Processamento2
total = horaTecnica * estimativa

//saida2
console.log(`Total a ser cobrado do cliente: R$ ${total.toFixed(2)}`)
console.log(`Total a ser cobrado do cliente: R$ ${total.toFixed(2)}`)








