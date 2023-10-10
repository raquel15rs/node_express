const { application } = require("express")
const express =  require("express")
const path = require("path")

const app = express()

const CaminhoBase = path.join(__dirname, "templates")

app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`Acessando dados do usuario ${id}`)

    resposta.sendFile(`${CaminhoBase}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${CaminhoBase}/index.html`)
})
app.listen(3000,() => {
    console.log("Servidor rodando na porta 3000!")
})