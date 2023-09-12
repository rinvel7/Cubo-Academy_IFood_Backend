//Cria um novo array com todos os elementos correspondentes a condicao implementada na funcao callback, passada como argumento.

const numeros = [1, 2, 3, 4, 5];

numeros.filter((numero) =>{
    return numero > 2;
})


//return [2, 3, 4]