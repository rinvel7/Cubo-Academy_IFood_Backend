//IMPORTAR a biblioteca express ao arquivo
const express = require('express');

//CRIAR INSTANCIA para utilizar express en diversas implementacoes no servidor

//const app = express();

//CRIAR ROTA

//app.get('/', (requisicao, resposta) =>{
//    resposta.send('Ola... Este e meu primeiro servidor com o express!')
//});

//COMO ACESAR A OUTRA ROTA

//app.get('/home', (requisicao, resposta) =>{
//    resposta.send('Ola... Este e meu primeiro servidor com o express!')
//}); //TERMINAL:  node .src/index.js

//COMO ACESAR A OUTRA ROTA

//app.get('/array', (requisicao, resposta) =>{
//      const array = [1,2,3,4];
//    resposta.send(array)
// }); //TERMINAL:  node .src/index.js

//CRIAR PORTA

//app.listen(3000); //TERMINAL:  node .src/index.js

//EXERCICIO
//INSTANACIA
const servidor = express();

const usuarios = [
    {id: 11, nome: 'joao', idade: 23},
    {id: 2, nome: 'maria', idade: 18},
    {id: 4, nome: 'ana', idade: 30},
    {id: 1, nome: 'rodrigo', idade: 17},
    {id: 123, nome: 'rodrigo', idade: 17},
]
//IMPRIMIR NA ABA ROTA USUARIOS
servidor.get('/usuarios', (requisicao, resposta) =>{
   resposta.send(usuarios)
}); //TERMINAL:  node .src/index.js

servidor.listen(3000, ()=> {
    console.log('Servidor inicializado na porta 3000')
})
