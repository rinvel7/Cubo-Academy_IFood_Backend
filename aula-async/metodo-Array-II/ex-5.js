//De acordo como o array de produtos abaixo, crie um novo array de produtos conendo nome, preco e desconto. O valor de desconto, sera de 10% com base no valor de cada produto.

const produtos = [
    {nome: 'arroz', preco: 500},
    {nome: 'carne', preco: 3200},
    {nome: 'biscoito', preco: 450},
    {nome: 'banana', preco: 320},
]


const produtoComDesconto = produtos.map((produto)=>{
    return {   
            nome: produto.nome,
            preco: (produto.preco/100).toFixed(2),
            desconto: (produto.preco * 0.1)/100,
    }
});
console.log(produtoComDesconto);