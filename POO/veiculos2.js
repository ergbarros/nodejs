/**
 *  desafio - POO
 */

//classe modelo
class Carro {

    // atributo
    constructor (ano, cor) {
        this.ano = ano
        this.cor = cor
    }

    //classe ações
criarCarro() {
    console.log("")
    console.log("🚘")
    console.log(`Veiculo ${this.cor}`)
    console.log(`Ano do Veiculo ${this.ano}`)
    
}

//Ações (método)
ligar() {
    console.log('Ligando o Veiculo ')
}
desligar() {
    console.log('Desligando o Veiculo')
}
acelera() {
    console.log('Acelerando o Veiculo ')
}
}

//classe 2
class Aviao{
    //atributos
    constructor(envergadura, cor) {
        this.envergadura = envergadura
        this.cor = cor
    }
    //classe ações
    criarAviao(){
        console.log("")
        console.log("✈️   Avião")
        console.log("Controlador do aviao")
        console.log(`Aviao de envergadura ${this.envergadura}`)
        console.log(`Aviao da cor ${this.cor}`)
    }

//Ações

voar() {
    console.log('Voando 🛫 ')
}
acelera(){
    console.log("Avião Decolando 🛫 ")
}
aterrizar(){
    console.log('Avião Aterrissando 🛬 ')
}
}


//criar carro
console.clear()
    console.log("🚘")
    console.log("")
    console.log("===== Veiculo🚘 =====")

const carro1 = new Carro(2007, "Corolla Preto")
carro1.criarCarro()
carro1.ligar()
carro1.acelera()
carro1.desligar()

const carro2 = new Carro(2020, "Sentra Branco")
carro2.criarCarro()
carro2.ligar()
carro2.acelera()
carro2.desligar()

const aviao1 = new Aviao("20 m", "Prata")
aviao1.criarAviao()
aviao1.voar()
aviao1.acelera()
aviao1.aterrizar()