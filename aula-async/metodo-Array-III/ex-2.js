//Dado o array de carros acaixo, crie uma funcao que receba dois argumentos de carrros e o campo a ser ordenado. A funcao deve retornar os recultados ordenados de acordo com o campo informado no segundo argumento.
const carros = [
    {nome: 'corolla', marca: 'toyota', ano: '2020', cor:'azul'},
    {nome: 'argo', marca: 'fiat', ano: '2021', cor:'preto'},
    {nome: 'ranger', marca: 'ford', ano: '2022', cor:'prata'},
    {nome: 'hilux', marca: 'toyota', ano: '2018', cor:'branco'},
]

const ordenarCarros = (arrayCarros, campoOrdenacao) => {
    arrayCarros.sort((primeiro, segundo)=>{
        return primeiro[campoOrdenacao].localeCompare(segundo[campoOrdenacao]);
    });
    console.log(arrayCarros);
}

ordenarCarros(carros, 'ano');