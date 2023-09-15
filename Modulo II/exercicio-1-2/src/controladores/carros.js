
const carros = require('../bd')

// A rota de listagem dos carros deve permitir FILTRAR carros pela MARCA e pela COR.
const listagemDeCarros = (req, res) =>{
    
    const { marca, cor } = req.query;
    let resultado = carros;
    //Adiciona una nova propiedade
    resultado.splice()

    if(marca){
        resultado = resultado.filter((carro)=>{
            return carro.marca === marca;
        });
    }
    if(cor){
        resultado = resultado.filter((carro)=>{
            return carro.cor === cor;
        });
    }
     res.send(resultado)
}

const encontrarUmCarro =(req, res) =>{
    const carroEncontrado = carros.find((carro)=>{
        return carro.id === Number(req.params.id)
    })
    // const { id } = req.params;
    // const carroEncontrado = carros.find((carro)=>{
    //          return carro.id === Number(id);
    //      })
    res.send(carroEncontrado);
}

module.exports = {
    listagemDeCarros,
    encontrarUmCarro
}