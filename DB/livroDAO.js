import Livro from "../Models/livro.js"
import Cliente from "../Models/cliente.js"
import conectar from "./conexao.js"

export default class LivroDAO{

    async gravar(livro){
        if (livro instanceof Livro){
            const conexao = await conectar()
            const sql = "INSERT INTO livro(liv_titulo, liv_autor, cli_cpf) VALUES (?, ?, ?)"
            const parametros = [
                livro.titulo,
                livro.autor,
                livro.cliente.cpf
            ]

            const [resultados] = await conexao.execute(sql, parametros)
            await conexao.release()
            livro.cod = resultados.insertId
        }
    }

    async alterar(livro){
        if (livro instanceof Livro){
            const conexao = await conectar()
            const sql = "UPDATE livro SET liv_titulo = ?, liv_autor = ?, cli_cpf = ? WHERE liv_id = ?"
            const parametros = [
                livro.titulo,
                livro.autor,
                livro.cliente.cpf,
                livro.cod
            ]

            await conexao.execute(sql, parametros)
            await conexao.release()
        }
    }

    async excluir(livro){
        if (livro instanceof Livro){
            const conexao = await conectar()
            const sql = "DELETE FROM livro WHERE liv_id = ?"
            const parametros = [livro.cod]

            await conexao.execute(sql, parametros)
            await conexao.release()
        }
    }

    async consultar(){
        const conexao = await conectar()
        const sql = "SELECT * FROM livro L INNER JOIN cliente C ON C.cli_cpf = L.cli_cpf"
        const [registros] = await conexao.query(sql)
        await conexao.release()

        let listaLivros = []
        for (const registro of registros) {
            const cliente = new Cliente(registro.CLI_CPF,
                                        registro.CLI_NOME, 
                                        registro.CLI_TELEFONE, 
                                        registro.CLI_EMAIL)

            const livro = new Livro(registro.LIV_ID,
                                    registro.LIV_TITULO, 
                                    registro.LIV_AUTOR, 
                                    cliente)
            listaLivros.push(livro)
        }

        return listaLivros
    }

    async consultarCodigo(cod){
        cod = cod || 0
        const conexao = await conectar()
        const sql = "SELECT * FROM livro L INNER JOIN cliente C ON C.cli_cpf = L.cli_cpf WHERE liv_cod = ?"
        const [registros] = await conexao.query(sql, [cod])
        await conexao.release()

        let listaLivros = []
        for (const registro of registros) {
            const cliente = new Cliente(registro.CLI_CPF,
                                        registro.CLI_NOME, 
                                        registro.CLI_TELEFONE, 
                                        registro.CLI_EMAIL)

            const livro = new Livro(registro.LIV_ID,
                                    registro.LIV_TITULO, 
                                    registro.LIV_AUTOR, 
                                    cliente)
            listaLivros.push(livro)
        }

        return listaLivros
    }
}