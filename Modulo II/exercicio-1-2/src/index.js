//EXERCICIO 1
//Crie un servidor HTTP utilizando o Express.js que 
//possua DUAS ROTAS para listagem geral do array de carros abaixo e 
//para encontrar um carro pelo seu identificador, respectivamente.
// A rota de listagem dos carros deve permitir FILTRAR carros pela MARCA e pela COR.

//EXERCICIO 2 
//De acordo com o servidos HTTP implementado no exercicio 1, 
//implemete un INTERMEDIARIO (middeware) INDEPENDIENTE para validar se ao acesar qualque rota, e imformado a senha do sistema carros123.
//A senha deve ser informada como parametro de consulta (query params) em ambas as rotas

const express = require ('express')
const { listagemDeCarros, encontrarUmCarro} = require ('./controladores/carros')
const { validarSenha } = require ('./intermediarios')    

const app = express();

//INTERMEDIARIO INDEPENDIENTE
app.use(validarSenha)

//ROTA para listagem geral de carros
app.get ('/carros', listagemDeCarros);
//ROTA para encontrar um carro pelo seu identificador
app.get ('/carros/:id', encontrarUmCarro );

app.listen(3000);
