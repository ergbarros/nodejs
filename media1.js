/**
 * App média para calcular a média de 2 notas
 */

//importação do pacote readline-sync
const read = require('readline-sync') 

// variáveis
let nome, diciplina
let nota1, nota2, media 

console.clear()
console.log(" ___      _     _   _ ")      
console.log("| _ ) ___| |___| |_(_)_ __ ")  
console.log("| _ \\/ _ \\ / -_)  _| | '  \\ ")
console.log("|___/\\___/_\\___|\\__|_|_|_|_| ")
console.log("")                                            

                            
// entrada
nome = read.question("Digite o seu nome: ")
disciplina = read.question("Digite a Disciplina: ")
nota1 = Number(read.question("Digite a nota1: "))
nota2 = Number(read.question("Digite a nota2: "))

// Processamneto
media = (nota1 + nota2) / 2

// Saída
console.clear()
console.log("--------------------------------")
console.log("Ficha do aluno:")
console.log(`Nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`nota 1: ${nota1}`)
console.log(`nota 2: ${nota2}`)
console.log(`media final: ${media}`)
console.log("--------------------------------")
