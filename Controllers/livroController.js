import Livro from "../Models/livro.js"

export default class LivroController 
{

    //HTTP POST
    gravar(requisicao, resposta)
    {
        if(requisicao.method == 'POST' && requisicao.is("application/json"))
        {
            const dados = requisicao.body
            if(dados.titulo && dados.autor && dados.cliente)
            {
                const livro = new Livro(0, dados.titulo, dados.autor, dados.cliente)
                livro.gravar()
                .then(()=>
                    resposta.status(200).json(
                    {
                        status: true,
                        mensagem: "Livro cadastrado com sucesso!"
                    })
                )
                .catch((erro)=>
                    resposta.status(500).json(
                    {
                        status: false,
                        mensagem: "Erro ao cadastrar livro:" + erro.message
                    })
                )
            }
            else
            {
                resposta.status(400).json(
                {
                    status: false,
                    mensagem: "Informe todos os dados do livro(título, autor e cliente)."
                })
            }
        }
        else
        {
            resposta.status(400).json(
            {
                status: false,
                "mensagem": "Requisição Inválida"
            })
        }
    }
    
    //HTTP PUT
    alterar(requisicao, resposta)
    {
        if((requisicao.method == 'PUT' || requisicao.method == 'PATCH') && requisicao.is("application/json"))
        {
            const dados = requisicao.body
            const cod = requisicao.params.cod

            if(cod && dados.titulo && dados.autor && dados.cliente)
            {
                const livro = new Livro(cod, dados.titulo, dados.autor, dados.cliente)
                livro.alterar().then(() => {
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Livro alterado com sucesso!"
                    })
                    })
                    .catch((erro) => {
                        resposta.status(500).json({
                            status: false,
                            mensagem: "Erro ao alterar livro:" + erro.message
                        })
                    })
            }
            else
            {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe todos os dados do livro(título, autor e cliente). O código deve ser informado na URL."
                })
            }
        }
        else
        {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição Inválida"
            })
        }
            
        
    }
        

    //HTTP DELETE
    excluir(requisicao, resposta)
    {
        if(requisicao.method == "DELETE")
        {
            const cod = requisicao.params.cod
            if(cod)
            {
                const livro = new Livro()
                livro.consultarCodigo(cod).then((listaLivros) =>
                {
                    const livro = listaLivros[0]
                    if (livro)
                    {
                        livro.excluir()
                        .then(() => {
                            resposta.status(200).json({
                                status: true,
                                mensagem: "Livro excluído com sucesso!"
                            })
                        })
                        .catch((erro) => {
                                resposta.status(500).json({
                                    status: false,
                                    mensagem: "Erro ao excluir o livro: " + erro.message
                                })
                            })
                    }
                    else
                    {
                        resposta.status(404).json({
                            status: false,
                            mensagem: "Livro não encontrado"
                        })
                    }
                })
                .catch((erro) => 
                {
                    resposta.status(500).json({
                        status: false,
                        mensagem: "Erro ao consultar o livro para exclusão: " + erro.message
                    })
                })
            }
            else
            {
                resposta.status(400).json({
                    status: false,
                    mensagem: "Informe o código do livro"
                })
            }
        }
        else
        {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição Inválida"
            })
        }
    }

    //HTTP GET
    consultar(requisicao, resposta)
    {
        if(requisicao.method == "GET"){
            const cod = requisicao.params.cod
            const livro = new Livro()
            if(cod)
            {
                livro.consultarCodigo(cod)
                .then((listaLivros)=>{
                    if(listaLivros.length > 0){
                        resposta.status(200).json({
                            status: true,
                            mensagem: "Livro consultado com sucesso!",
                            livros: listaLivros
                        })
                    }
                    else
                    {
                        resposta.status(404).json({
                            status: false,
                            mensagem: "Livro não encontrado"
                        })
                    }
                })
                .catch((erro)=>{
                    resposta.status(500).json({
                        status: false,
                        mensagem: "Erro ao consultar livro: " + erro.message
                    })
                })
            }
            else
            {
                livro.consultar()
                .then((listaLivros)=>{
                    resposta.status(200).json({
                        status: true,
                        mensagem: "Livro consultado com sucesso!",
                        livros: listaLivros
                    })
                })
                .catch((erro)=>{
                    resposta.status(500).json({
                        status: false,
                        mensagem: "Erro ao consultar livros: " + erro.message
                    })
                })
            }
        }
        else
        {
            resposta.status(400).json({
                status: false,
                mensagem: "Requisição Inválida"
            })
        }
    }
}