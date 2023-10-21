/**
 * Exercício de fixação - POO
 */

const read = require('readline-sync')
const colors = require('colors')

//classe modelo
class Conta {
	//Atributos
    constructor(numero, titular, saldo) {
        this._titular = titular
        this._saldo = saldo
        this._numero = numero
    }

    getTitular() {
        return this._titular
    }

    getSaldo() {
        return this._saldo
    }

    getNumero() {
        return this._numero
    }
	//ações
    exibirSaldo() {
        console.log(`O saldo da conta ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`)
    }

    depositar(valor) {
        this._saldo += valor
        console.log(`Crédito de R$ ${valor.toFixed(2)}`)
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor
            console.log(`Débito de R$ ${valor.toFixed(2)}`)
        } else {
            console.log("Operação negada! Saldo insuficiente !")
        }
    }

    pix(valor, destino) {
        if (valor <= this._saldo) {
            this._saldo -= valor
            destino.depositar(valor)
            console.log(`PIX R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso.`)
        } else {
            console.log("Operação negada! Saldo insuficiente.")
        }
    }
        transferencia(valor, destino) {
            if (valor <= this._saldo) {
                this._saldo -= valor
                destino.depositar(valor)
                console.log(`TRANFERÊNCIA R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso.`)
            } else {
                console.log("Operação negada! Saldo insuficiente.")
            }
    }
}

//poupança
class ContaPoupanca extends Conta {
	//atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
 	//metodo
    
    exibirSaldoPoupanca() {
        console.log(`O saldo da conta Poupança do ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`)
    }
}

console.clear()
console.log("----------------------------------------------")
console.log("--------------------BANCO---------------------")
console.log("----------------------------------------------")
console.log()

//criação Poupança Vaamonde
let cp1 = new ContaPoupanca("10/500","Robson Vaamonde", 500)
console.log(`Cliente: ${cp1.getTitular()}  "conta Cp": ${cp1.getNumero()}`.yellow)
cp1.exibirSaldoPoupanca()
console.log()
//criação Poupança Sirlene
let cp2 = new ContaPoupanca("20/500","Sirlene Aparecida", 700)
console.log(`Cliente: ${cp2.getTitular()}  conta Cp: ${cp2.getNumero()}`.blue)
cp2.exibirSaldoPoupanca()
console.log()
//criação Poupança Leandro
let cp3 = new ContaPoupanca("30/500","Leandro Ramos", 1000)
console.log(`Cliente: ${cp3.getTitular()}  conta Cp: ${cp3.getNumero()}`.red)
cp3.exibirSaldoPoupanca()
console.log()

//criação conta corrente Vaamonde
let cc1 = new Conta (1, "Robson Vaamonde", 1000)
console.log(`Cliente: ${cc1.getTitular()}  conta Cc: ${cc1.getNumero()}`.yellow)
cc1.exibirSaldo()
cc1.depositar(1000)
cc1.exibirSaldo()
cc1.sacar(20)
cc1.exibirSaldo()
cc1.pix(1, cp2); 
cc1.transferencia(10, cp3); 
console.log()

//criação conta corrente Sirlene
let cc2 = new Conta (2, "Sirlene Aparecida", 500)
console.log(`Cliente: ${cc2.getTitular()}  conta Cc: ${cc2.getNumero()}`.blue)
cc2.exibirSaldo()
cc2.depositar(100)
cc2.exibirSaldo()
cc2.sacar(20)
cc2.exibirSaldo()
cc2.transferencia(51, cc1);  // transferência de Sirlene para CC Vaamonde
cc2.transferencia(51, cp3);  // transferência de Sirlene para Cp Leandro
console.log()
// Criação conta corrente Leandro
let cc3 = new Conta (3, "Leandro Ramos", 1000)
console.log(`Cliente: ${cc3.getTitular()} | conta Cc: ${cc3.getNumero()}`.red)
cc3.exibirSaldo()
cc3.depositar(300)
cc3.exibirSaldo()
cc3.sacar(20)
cc3.exibirSaldo()
cc3.pix(200, cc2); // pix de Leandro para Sirlene
cc3.pix(100, cp1); // transferência de Leandro para Vaamonde Poupança 
cc3.transferencia(110, cc2); // transferência de Leandro para CC da Sirlene
cc3.transferencia(110, cc1); // transferência de Leandro para CC do Vaamonde

console.log()
console.log("Extrato:");
console.log()
console.log(`Cliente: ${cc1.getTitular()}  conta Cc: ${cc1.getNumero()}`.yellow)
cc1.exibirSaldo();
console.log(`Cliente: ${cp1.getTitular()}  conta Cp: ${cp1.getNumero()}`.yellow)
cp1.exibirSaldo();
console.log("----------------------------------------------------------------")
console.log(`Cliente: ${cc2.getTitular()}  conta Cc: ${cc2.getNumero()}`.blue)
cc2.exibirSaldo();
console.log(`Cliente: ${cp2.getTitular()}  conta Cp: ${cp2.getNumero()}`.blue)
cp2.exibirSaldo();
console.log("----------------------------------------------------------------")
console.log(`Cliente: ${cc3.getTitular()}  conta Cc: ${cc3.getNumero()}`.red)
cc3.exibirSaldo();
console.log(`Cliente: ${cp3.getTitular()}  conta Cp: ${cp3.getNumero()}`.red)
cp3.exibirSaldo();
console.log("")
