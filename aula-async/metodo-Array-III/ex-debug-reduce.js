const array = [ 0, 1 , 2 , 3, 4]

    const result = array.reduce((acumulador, valorActual, indice, array)=>{
    acumulador =  acumulador + valorActual;
    return acumulador;
    });
console.log(result);