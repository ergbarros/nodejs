/**
 * POO  -  Estudo do encapsulamento
 */

// classe modelo
class Pessoa {
    //atributos
    constructor(nome, idade){
        this.nome = nome  // Variável pública
        let _idade = idade // let _idade (encapsular a variável)
        this.idade = idade
    }
    // metódos (acões)
    apresentar(){
        console.log(`Olá , meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }

}
console.clear
/** instanciar (criar) objetos ***/
const pessoa1 = new Pessoa("Edinaldo", 44)
pessoa1.apresentar()