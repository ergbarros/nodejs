/**
 * Estudo das funções
 */

//Função simples

function hello(){
    console.log("Hello function")
}

// para executar uma função basta escrever o nome da função junto com parênteses
hello()

// Funções atribuídas

const hello2 = function() {
    console.log("Hello function atribuida")
} 

hello2()

// Função atribuida simplificada (arrow function) (=>) Simbolo da function

const hello3 = () => {
    console.log ("Hello arrow function")
}

hello3()

console.log(typeof(hello3))

