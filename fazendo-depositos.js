const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1223456745",
    email: "andre@gmail.com",
    fones: ["646656457","557885423"],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'},
      {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
      }
    ],
    saldo:100,

    depositar:function(valor)
    {
        this.saldo += valor
    },

    sacar:function(valor)
    {
        this.saldo -= valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
cliente.sacar(20)
console.log(cliente.saldo)