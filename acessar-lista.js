const cliente = {
    nome: "Paulo",
    idade: 36,
    cpf: "1223456745",
    email: "andre@gmail.com"
}

const chaves = ["nome","idade","cpf","email"]

//console.log(cliente[chaves])

chaves.forEach(info => console.log(cliente[info]))