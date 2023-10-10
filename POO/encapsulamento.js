/**
 * POO  -  Estudo do encapsulamento
 */

// classe modelo
class Pessoa {
    //atributos
    
    constructor(nome, idade){
        this.nome = nome  // Variável pública
        let _idade = idade // let _idade (encapsular a variável)
       
        // metódos get e set para (acessar a variavel idade)
        this.getIdade = () => {
            return _idade
        }
        this.setIdade = (novaIdade) => {
            _idade = novaIdade
        }
        //-------------------------------------------------
    }
    // metódos (acões)
    apresentar(){
        console.log(`Olá , meu nome é ${this.nome} e tenho ${this.getIdade()} anos.`)
    }

}
console.clear
/** instanciar (criar) objetos ***/
const pessoa1 = new Pessoa("Edinaldo", 44)
pessoa1.apresentar()
pessoa1.setIdade(45)
pessoa1.apresentar()