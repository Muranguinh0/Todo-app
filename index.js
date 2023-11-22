const express = require ("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("No céu tem pão?")
})

app.listen(3000, () => {
    console.log("Miau rodando")
})