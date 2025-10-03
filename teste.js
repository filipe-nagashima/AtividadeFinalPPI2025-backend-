import Cliente from "./Models/cliente.js"
import Livro from "./Models/livro.js"

const cliente = new Cliente("342.985.475-98", "Soraia Batista Phoebe", "(18)99116-9384", "soraia@example.com")
const livro = new Livro(0, "Harry Potter e a Pedra Filosofal", "J.K. Rowling", cliente)

/*await cliente.gravar()
console.log("Cliente gravado com sucesso!")*/

/*await livro.gravar()
console.log("Livro gravado com sucesso!")
console.log("O livro recebeu o seguinte código: " + livro.cod)*/

//console.log(cliente.toString())

//console.log(livro.toString())

/*cliente.nome = "Filipe S. Nagashima"
await cliente.alterar()
console.log("Cliente alterado com sucesso!")*/

/*livro.titulo = "Harry Potter e a Câmara Secreta"
await livro.alterar()
console.log("Livro alterado com sucesso!")*/

/*const listaClientes = await cliente.consultar()

for (const c of listaClientes) {
    console.log(c.toString())
}

console.log("Clientes consultados com sucesso!")*/

/*const listaLivros = await livro.consultar()

for (const l of listaLivros) {
    console.log(l.toString())
}

console.log("Livros consultados com sucesso!")*/

/*await livro.excluir()
console.log("Livro excluído com sucesso!")*/

/*await cliente.excluir()
console.log("Cliente excluído com sucesso!")*/