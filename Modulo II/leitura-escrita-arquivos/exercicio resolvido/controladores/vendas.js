const produtos = require('../bancodedados');
const fs = require('fs/promises')


const listagemProdutos = async (req, res) => {
    return res.status(200).json(produtos)
}

const vendas = async (req, res) => {
    
    const { produtos_id, quantidade } = req.body;

    const produtosEncontrados = produtos.find((produto)=>{
        return produto.id === Number(produtos_id)
    })

    if(!produtosEncontrados){
        return res.status(404).json('O produto nao foi encontrado');
    }

    try{
        const vendas = await fs.readFile('./src/vendas.json');
        
        const parseVendas = JSON.parse(vendas);
            parseVendas.vendas.push({
                produto: produtosEncontrados,
                quantidade
        });

        await fs.writeFile('./src/vendas.json', JSON.stringify(parseVendas));
        return res.status(201).json('Vendas registrada com sucesso.');
    }catch(erro){
        return res.status(500).json('Erro do sistema');
    }
}

module.exports = {
    listagemProdutos,
    vendas
}