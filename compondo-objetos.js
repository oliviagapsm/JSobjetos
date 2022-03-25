const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1223456745",
    email: "andre@gmail.com",
    fones: ["646656457","557885423"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)