const express = require('express');
const { 
    cadastrarUsuario,  
    atualizarPerfil, 
    obterPerfil
} = require('./controladores/usuarios')
const login = require('./controladores/login')
const verificarLogin =require('./filtros/VerificaLogin')

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

module.exports = rotas;

