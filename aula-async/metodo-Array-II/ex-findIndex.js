const carros = [
    {nome: 'corolla', marca: 'toyota', ano: 2020, cor:'azul'},
    {nome: 'argo', marca: 'fiat', ano: 2021, cor:'preto'},
    {nome: 'ranger', marca: 'ford', ano: 2022, cor:'prata'},
    {nome: 'hilux', marca: 'toyota', ano: 2018, cor:'branco'},
]
const resultado = carros.findIndex((carro) => {
    return carro.nome === 'corolla';
});

console.log(resultado);