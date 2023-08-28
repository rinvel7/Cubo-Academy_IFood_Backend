//FINDINDEX: retorna o indice do pripeiro elemento do array, correspondente a condicao implementada na funcao callback, passada como argumento. Caso contrario, retorna -1.
//               0  1  2  3  4 
const numeros = [1, 2, 3, 4, 5];

numeros.findIndex((numero) => {
    return numero === 5;
})

//4