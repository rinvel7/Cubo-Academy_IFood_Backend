//Dado o array de usuarios abaixo, 
//utilize o reduce para filtrar o usuario que possui a maior idade dentre os elementos do array e 
//retorne o objeto completo com os dados do usuario encontrado.

const usuarios = [
    {id: 11, nome: 'joao', idade: 23},
    {id: 2, nome: 'maria', idade: 18},
    {id: 4, nome: 'ana', idade: 30},
    {id: 1, nome: 'rodrigo', idade: 17},
    {id: 123, nome: 'rodrigo', idade: 17},
]

 const maiorIdade = usuarios.reduce((acumulador, valorActual, indice, array) => {
    let maior = acumulador;

    if(valorActual.idade > maior.idade){
        maior = valorActual
    }
    return  maior 
});

console.log(maiorIdade);