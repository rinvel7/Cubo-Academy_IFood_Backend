const express = require ('express');

//IMPORTAR arquivos, PODE SER DE DOS FORMAS:
// CRIANDO UMA VARIAVEL
//const controladorProfessores = require ('./controladores/professores')

//DESESTRUCURANDO
const {
    filtrarProfessores, 
    encontrarUmProfessor
} = require('./controladores/professores');


const app = express();

//INTERMEDIARIO
const primeiroIntermediario = ((req, res, next)=>{
    console.log('Passei meu primeiro intermediario');
    next();
});

const segundoIntermediario = ((req, res, next)=>{
    console.log('Passei meu segundo intermediario');
    next();
});

app.use(primeiroIntermediario)
app.use(segundoIntermediario)

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