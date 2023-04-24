//servidor: serve para servir as informações que foram solicitadas pelo cliente

//importando o pacote express que instalamos
const express = require('express')

//utilizando o express
const app = express()
//eh tipo o endereco do servidor
const porta = 3333

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

//o servidor precisa começar a ouvir requisicoes
app.listen(porta, mostraPorta)