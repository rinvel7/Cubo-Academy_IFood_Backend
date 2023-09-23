//Implemente un API REST de uma loja Virtual que possibilite listar os produtos e reealizar uma venda.
//Os productos estan no banco de dados
//1. A rota GET /produtos devera retornar a lsitagem de produtos disponibles
//2. A rota Post / produtos devera registrar uma venda num arquivo JSON seguindo formato.
//O body (insomnia) enviado para a rota POST /produtos devera conter o id do produto e a quantidade desejada
const express = require('express');
const { listagemProdutos, vendas } = require('../controladores/vendas');

const app = express();

app.use(express.json());

app.get('/produtos', listagemProdutos)

app.post('/produtos', vendas)

app.listen(3000)