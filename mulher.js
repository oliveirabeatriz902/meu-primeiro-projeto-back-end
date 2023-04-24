//servidor: serve para servir as informações que foram solicitadas pelo cliente

//importando o pacote express que instalamos
const express = require('express')
const router = express.Router()

function mostraMulher(request, response) {
    //criando um objeto
    response.json({
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    })
}

//utilizando o express
const app = express()
//eh tipo o endereco do servidor
const porta = 3333

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
//o servidor precisa começar a ouvir requisicoes
app.listen(porta, mostraPorta)