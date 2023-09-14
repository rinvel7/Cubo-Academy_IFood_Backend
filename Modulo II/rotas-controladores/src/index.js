const express = require ('express');

//IMPORTAR, PODE SER DE DOS FORMAS
// CRIANDO UMA VARIAVEL
//const controladorProfessores = require ('./controladores/professores')

//DESESTRUCURANDO
const {
    filtrarProfessores, 
    encontrarUmProfessor
} = require('./controladores/professores');


const app = express();


//PARAMETRO DE CONSULTA (query)
//localhost:3000/professores
//CUANDO A IMPORTACAO E CRIANDO UMA VARIAVEI
//app.get('/professores', controladorProfessores.filtrarProfessores);

app.get('/professores', filtrarProfessores);
//ROTA COM PARAMETROS (params)
//localhost:3000/professores/1
//CUANDO A IMPORTACAO E CRIANDO UMA VARIAVEI
//app.get('/professores/:id', controladorProfessores.encontrarUmProfessor)

app.get('/professores/:id', encontrarUmProfessor)

app.listen(3000)