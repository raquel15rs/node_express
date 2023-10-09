const { application } = require("express")
const express =  require("express")
const path = require("path")

const app = express()

const CaminhoBase = path.join(__dirname, "templates")


app.get('/', (requisicao, resposta) => {
    // resposta.sendFile(`${CaminhoBase}/index.html`)
    resposta.send("Teste do nodemon")
})
app.listen(3000,() => {
    console.log("Servidor rodando na porta 3000!")
})