//FIND() retorna o priemiro elemento do aaray, correspondiente a condicao implementada na funcao callback, passada como argumento. Caso contrario, retorna undefined.

const numeros = [1,2,3,4, 5];

const resultado = numeros.find((elementoAtua) =>{
    return elementoAtua > 2;
}); // 3
console.log(resultado);

//ELe retorna o primeiro numero encontrado maior a 2