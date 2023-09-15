//Crie un servidor HTTP utilizando o Express.js que 
//possua DUAS ROTAS para listagem geral do array de carros abaixo e 
//para encontrar um carro pelo seu identificador, respectivamente.
// A rota de listagem dos carros deve permitir FILTRAR carros pela MARCA e pela COR.
const express = require ('express')

const { 
    listagemDeCarros,
    encontrarUmCarro} 
    = require ('./controladores/carros')

const app = express();

//ROTA para listagem geral de carros
app.get ('/carros', listagemDeCarros);
//ROTA para encontrar um carro pelo seu identificador
app.get ('/carros/:id', encontrarUmCarro );

app.listen(3000);
