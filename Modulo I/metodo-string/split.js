//METODO SPLIT(TEXT): transforma uma string num array de strings menores,separando-a em todos os lugares onde encontrar o argumeno text.

//                    array array   array  
//                      0     1       2
const nomeCompleto = 'Jose Messias Pereira';//ele considera cada texto como o indice de um array
const array = nomeCompleto.split(' ');//o argumento e o espaco, entao o array vai buscar o espacos
const nomeDoMeio = array[1];//ele imprime o indice pos encontrar o primeiro espaco.

console.log(nomeDoMeio);//Messias

// E UTILIZADO PARA SEPARAR OS NOME DE UMA PESSOA
 