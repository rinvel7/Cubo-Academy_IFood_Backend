const produtosConsumidos = 
[{ 
    nome: 'salgado',
    precoUnit: 1000,
    qtd: 2
},

{
    nome: 'suco',
    precoUnit: 500,
    qtd: 2
},
{
    nome: 'bolo',
    precoUnit: 1400,
    qtd: 2
},
]

const cartao = {
    nome: 'Rina',
    idade: 44,
    produtosConsumidos
}


//console.log(cartao);
//imprime nome do cliente
console.log(cartao.nome);
//imprime idade
console.log(cartao.idade);
//modifica e imprime nova idade 
cartao.idade = 45;
console.log(cartao.idade);
//imprime nome do primeiro produto consumido
console.log(cartao.produtosConsumidos[0].nome);
//imprime preco unitario do ultimo produto consumido
//console.log(cartao.produtosConsumidos[2].precoUnit)
//mas este caso imprime sempre o ultimo independientemente do tamanho do array
console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);
