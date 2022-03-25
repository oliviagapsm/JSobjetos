function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email 
    this.saldo = saldo 
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new Cliente("André","985498549","andre@email.com",100)

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("Ju","884754834","ju@email.com",100,200)

console.log(ju)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(30)

console.log(ju.saldoPoup)
console.log(andre.saldoPoup)