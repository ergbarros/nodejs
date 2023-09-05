/**
*calculador de desconto
*/

// importação do pacote readline-sync
const read = require('readline-sync')

console.clear()

console.log("'########::'########::'##::::'##:'")
console.log("##.... ##: ##.... ##: ##:::: ##:")
console.log("##:::: ##: ##:::: ##: ##:::: ##:")
console.log(" ########:: ##:::: ##: ##:::: ##:")
console.log("##.....::: ##:::: ##:. ##:: ##::")
console.log(" ##:::::::: ##:::: ##::. ## ##:::")
console.log("##:::::::: ########::::. ###::::")
console.log("..:::::::::........::::::...:::::")

let total
let valor
let desconto
let dinheiro
let troco

console.log("__________________________________")
console.log("")
            
//entrada 1
valor = Number(read.question('qual o valor da compra: ').replace (",","."))
desconto= Number(read.question('Digite o valor do desconto em %: ').replace (",","."))

//Processamento 1
total = valor - (desconto * valor)/100


//saida 1

console.log('|=================================')
console.log(`|${desconto}% de R$ ${valor} = R$ ${total.toFixed(2)}`)
console.log('|=================================')

//entrada 2
dinheiro = Number(read.question('qual o valor que o cliente pagou: ').replace (",","."))

//processamento 2
troco =dinheiro - total

//saida 2
console.log('|=================')
console.log(`|troco: R$ ${troco.toFixed(2)}`)
console.log('|=================')