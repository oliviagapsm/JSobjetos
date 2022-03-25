const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1223456745",
    email: "andre@gmail.com",
    fones: ["646656457","557885423"],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome)
console.log(filhaMaisNova)