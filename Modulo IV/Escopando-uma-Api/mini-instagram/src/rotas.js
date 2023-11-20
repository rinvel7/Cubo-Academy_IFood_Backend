const express = require('express');
const { 
    cadastrarUsuario,  
    atualizarPerfil, 
    obterPerfil
} = require('./controladores/usuarios')
const login = require('./controladores/login')
const verificarLogin =require('./filtros/VerificaLogin');
const { 
    novaPostagem, 
    curtir, 
    comentar, 
    feed 
} = require('./controladores/postagens');

const rotas = express()

// cadastro de usuario
rotas.post('/cadastro', cadastrarUsuario)

//login
rotas.post('/login', login)

//filtro parq verificar usuario logado
rotas.use(verificarLogin);

//obter e atualizar perfil do usuario logado
rotas.get('/perfil', obterPerfil)
rotas.put('/perfil', atualizarPerfil)

//postagen
rotas.post('/postagens', novaPostagem)
rotas.get('/postagens', feed)
rotas.post('/postagens/:postagemId/curtir', curtir)
rotas.post('/postagens/:postagemId/comentar', comentar)



module.exports = rotas;

