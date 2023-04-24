const express = require('express')
//configurando a rota (Router é uma função do express)
const router = express.Router()

const app = express()
const porta = 3333

function mostraOla(request, response) {
    response.send('Olá, mundo!')
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

//quero que o servidor use a rota get chamando o endereço ola, e então a funcao mostraOla deve ser mostrada
app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)

