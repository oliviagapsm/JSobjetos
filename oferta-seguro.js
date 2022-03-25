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
    }
}

const prospClientes = Object.keys(cliente)

//console.log(prospClientes)

function oferecerSeguro(obj){
    const prospClientes = Object.keys(cliente);
    if(prospClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

console.log(Object.entries(cliente))
oferecerSeguro(cliente);