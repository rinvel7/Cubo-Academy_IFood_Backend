const  axios  = require('axios')
const express = require('express')

const app = express()

const instanciaAxios = axios.create({
    baseURL:'http://localhost:3002'
})

app.use(express.json())

app.get('/', async(req, res) => {
    //return res.json('API 1 porta 3001')

    //const resultadoAxios = await instanciaAxios.get('http://localhost:3002/carros')
    
    const novoCarro = {
        modelo: 'Celta',
        marca: 'Chevrolet'
    }

    const resultadoAxios = await instanciaAxios.post('/carros', novoCarro)
    
    res.json(resultadoAxios.data) 
})

app.listen(3001)