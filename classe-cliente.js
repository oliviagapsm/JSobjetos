class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    sacar(valor){
        this.saldo -= valor
    }

    exibirSaldo(){
        console.log(`Seu saldo é R$${this.saldo}`)
    }
}

const andre = new Cliente("Andre","andre@email.com","4875894375",100)

andre.exibirSaldo()
andre.depositar(45)
andre.exibirSaldo()
andre.sacar(75)
andre.exibirSaldo()

//console.log(andre)