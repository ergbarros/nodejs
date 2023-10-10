/**
 * Exercícios de fixação - POO
 */
// classe modelo
class Conta{
    //atributos
    constructor(numero, titular, saldo){
        this.numero = numero
        this.titular = titular
        this.saldo = saldo

    }
    //métodos
    exibirSaldo(){
        console.log(`Saldo da Conta Corrente: R$: ${this.saldo.toFixed(2)}`)
    }
    depositar(valor){
        this.saldo += valor
        console.log(`Crédito de R$: ${valor.toFixed(2)}`)
    }
    sacar (valor){
        // Validação
        if (valor <= this.saldo){
            this.saldo -= valor
            console.log(`Débito de R$: ${valor.toFixed(2)}`)
        }else{
            console.log("Saque não permitido")
        }
        }
    }

// Herança
class ContaPoupanca extends Conta{
    //atributos
    constructor(numero, titular, saldo){
        super (numero, titular, saldo)
        
    }
    //métodos
    exibirSaldoPoupanca(){
        console.log(`Saldo da Conta Poupança: R$: ${this.saldo.toFixed(2)}`)

    }
}
/*****Clientes*****/
console.clear()

console.log("  _____  ___   _   _  _   __ ")
console.log(" | ___ \/ _ \ | \ | || | / / ")
console.log(" | |_/ / /_\ \|  \| || |/ /  ") 
console.log(" | ___ \  _  || . ` ||    \  ")
console.log(" | |_/ / | | || |\  || |\  \ ")
console.log(" |____/\_| |_/\_| \_/\_| \_/ ")
console.log("")

// instaciar um objeto
let cc1 = new Conta ("000001", "Leandro Ramos" ,10000)
console.log(`Cliente: ${cc1.titular} conta: ${cc1.numero}`)
cc1.exibirSaldo()
cc1.depositar(5000)
cc1.exibirSaldo()
cc1.sacar(8000)
cc1.exibirSaldo()

let cc1p = new ContaPoupanca("500/000001","Leandro Ramos", 1000)
console.log(`Cliente: ${cc1p.titular} conta: ${cc1p.numero}`)
cc1p.exibirSaldoPoupanca()

