const read = require('readline-sync');
const colors = require('colors');

class Conta {
    constructor(numero, titular, saldo) {
        this._titular = titular;
        this._saldo = saldo;
        this._numero = numero;
    }

    getTitular() {
        return this._titular;
    }

    getSaldo() {
        return this._saldo;
    }

    getNumero() {
        return this._numero;
    }

    exibirSaldo() {
        console.log(`Saldo da conta corrente é R$ ${this.getSaldo().toFixed(2)}.`);
    }

    depositar(valor) {
        this._saldo += valor;
        console.log(`Débito de R$ ${valor.toFixed(2)}`);
        
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Débito de R$ ${valor.toFixed(2)}`);
        } else {
            console.log("Saldo insuficiente");
        }
    }

    pix(valor, destino) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            destino.depositar(valor);
            console.log(`PIX de R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}

class ContaPoupanca extends Conta {
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo);
    }

    exibirSaldoPoupanca() {
        console.log(`Saldo da conta Poupança R$: ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`);
    }
}

console.log("====================================")
console.log("============= BANCO ================")
console.log("====================================")

let leandro = new Conta("00001", "Leandro Ramos", 1000);
let sirlene = new Conta("00002", "Sirlene Aparecida", 500);
let robson = new Conta("00003", "Robson Vaamonde", 200);
let poupancaLeandro = new ContaPoupanca("00001/500", "Leandro Ramos", 500);
poupancaLeandro.exibirSaldoPoupanca

console.log(`Cliente: ${leandro.getTitular()} conta: ${leandro.getNumero()}`.red);
leandro.exibirSaldo();
leandro.pix(200, sirlene); 
leandro.pix(300, robson); 
leandro.exibirSaldo();
console.log(`Cliente: ${poupancaLeandro.getTitular()} conta poupanca: ${poupancaLeandro.getNumero()}`.yellow);
poupancaLeandro.exibirSaldoPoupanca();
console.log("")

console.log(`Cliente: ${sirlene.getTitular()} conta: ${sirlene.getNumero()}`.blue);
sirlene.exibirSaldo();
console.log("")

console.log(`Cliente: ${robson.getTitular()} conta: ${robson.getNumero()}`.green);
robson.exibirSaldo();
console.log("")

