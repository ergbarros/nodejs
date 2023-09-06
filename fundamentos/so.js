/**
 * Exemplo de uso da Estrutura Switch Case
 */

const read = require("readline-sync")

console.clear()
console.log("Sistema operacional")
console.log("")
console.log("1. Windows")
console.log("2. Linux")
console.log("3. Mac")

opcao = Number(read.question("Escolha um Sistema: "))
switch (opcao){
    case 1:
        console.clear()
        console.log("Carregando o Windows..............")
         break  
    case 2:
        console.clear()
        console.log("Carregando o Linx.................")
        break
    case 3:
        console.clear()
        console.log("Carregando o Mac..................")
        break
        
        default:
            console.log("Opção inválida")
}