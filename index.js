import express from 'express'
import cors from 'cors'
import clienteRouter from './Routes/rotaCliente.js'
import livroRouter from './Routes/rotaLivro.js'

const hostname = '0.0.0.0'
const porta = 4000

const app = express()

app.use(cors(
{
    origin: '*'
}))

app.use(express.json())

app.use("/cliente", clienteRouter)
app.use("/livro", livroRouter)

app.listen(porta, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${porta}/`)
})