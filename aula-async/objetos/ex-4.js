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

//Programa que permite acesar a os items para  +.6depois multiplicar as cantidades pertinentes 
let valorTotal = 0;
for(let produto of produtosConsumidos){
    valorTotal += produto.precoUnit * produto.qtd

}
//para que o total se imprima com casillas decimais correita
const totalFormatado = (valorTotal/100).toFixed(2)

console.log(`Ola ${cartao.nome}, el valor total a pagar e R$${totalFormatado} Obrigado pela sua visita!`)