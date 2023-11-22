const express = require ("express")
const exphbs = require ("express.handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine')

app.get('/', (requisicao, resposta) => {
    resposta.send("No céu tem pão?")
})

app.listen(3000, () => {
    console.log("Miau rodando")
})