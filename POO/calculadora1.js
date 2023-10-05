/**
 * Estudos da funções 
 * Calculadora
 */

const read = require('readline-sync')
const colors = require('colors')

console.clear()
console.log("Calculadora\n") // n quebra de linha

console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Porcentagem")

let opcao = Number(read.question("Digite a Opcao desejada: ").replace(",", "."))
// melhorando a opção do usuarios (validação)
if (opcao < 1 || opcao > 5) {
    console.log("Opção Invalida")
    process.exit([0]) // encerra o aplicativo no console
}

console.clear("")
let num1 = Number(read.question("Digite o primeiro valor: ").replace(",", "."))
let num2 = Number(read.question("Digite o segundo valor: ").replace(",", "."))


switch (opcao) {
    case 1:
        //executar a função somar
        somar(num1, num2)
        break

    case 2:
        subtrair(num1, num2)
        break

    case 3:
        multiplicar(num1, num2)
        break

    case 4:
        dividir(num1, num2)
        break

    case 5:
        porcentagem(num1, num2)
        break

}

// função somar 
// Observação funções não atribuida a variáveis podem ser declaradas no fim do codigos, funções atribuidas e arrow function precisam ser declaradas no inicio do código

function somar(num1, num2) {
    return (console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`))
}
function subtrair(num1, num2) {
    return (console.log(`A subtrair de ${num1} - ${num2} = ${num1 - num2}`))
}
function multiplicar(num1, num2) {
    return (console.log(`A multiplicar de ${num1} * ${num2} = ${num1 * num2}`))
}
function dividir(num1, num2) {
    if (num2 === 0) {
        console.log("Impossivel dividir por zero")
        process.exit([0])
    } else {
        return (console.log(`A dividir de ${num1} / ${num2} = ${num1 / num2}`))
    } 
}
function porcentagem(num1, num2) {
    return (console.log(`A porcentagem de ${num1} % de ${num2} = ${(num1 * num2) / 100}`))
}

