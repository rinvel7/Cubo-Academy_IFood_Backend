//criar uma funcao que receba o nome da marca de um carro e um array de objetos contendo as propriedades nome, marca, ano e cor. A funcao deve encontrar os dados de carro, a partir do nome da marca, no array passadocomo argumento e deve exibir todos os dados como retorno.

const carros = [
    {nome: 'corolla', marca: 'toyota', ano: 2020, cor:'azul'},
    {nome: 'argo', marca: 'fiat', ano: 2021, cor:'preto'},
    {nome: 'ranger', marca: 'ford', ano: 2022, cor:'prata'},
    {nome: 'hilux', marca: 'toyota', ano: 2018, cor:'branco'},
]

function dadosDoCarro(marca, arrayDeCarros){
    const resultado = arrayDeCarros.find((carro) =>{
        return carro.marca === marca;
    });
    console.log(resultado);      
}

dadosDoCarro('ford', carros) 

//RESOLVIDO PLATAFORMA
//Codigo melhor, flexivel e escalavel 
/* 
const buscarCarro = (marca, arrayCarros) => {
    const resultado = arrayCarros.find((carro) =>{
        return carro.marca === marca;
    });
    console.log(resultado);
}

buscarCarro('toyota', carros);
 */
/* 
O código que você forneceu agora parece estar correto. Você definiu a função dadosDoCarro que recebe a marca de um carro e um array de carros como argumentos. A função utiliza o método find() para procurar um carro no array de carros que corresponde à marca especificada e, em seguida, imprime as informações desse carro no console.

Ao chamar a função dadosDoCarro('ford', carros), você está buscando um carro com a marca "ford" no array carros. Se um carro com essa marca for encontrado, as informações desse carro serão impressas no console.  */