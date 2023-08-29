//Reduce() Executa uma funcao callback, passando como argumento, para cada elemento do array, que resulta em apenas um valor de retorno.

//REDUCE PARA UM UNICO VALOR)

//A funcao passada como argumento para o metodo reduce(), rcebe 4 argumentosÇ

//- ACUMULADOR: valor inicial (ou o valor do callback do callback anterior).
//- VALORATUAL.
//- INDICE: indice atual.
//- ARRAAY: array completo.

const array = [ 0, 1 , 2 , 3, 4]
        array.reduce((acumulador, valorActual, indice, array)=>{
    return acumulador + valorActual;
    })
    
    //10

    const array1 = [ 0, 1, 2, 3, 4]
        array1.reduce((acumulador, valorActual, indice, array)=>{
    return acumulador + valorActual;
    }, 10)//---> valor inicial do acumulador
    
    //20

    