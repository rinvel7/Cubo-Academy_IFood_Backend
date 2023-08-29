// COM FOR

const array = [ 0, 1,  2, 3, 4];

let somaTotal = array[0];

for(let i = 1; i < array.length; i++){
    const elementoAtual = array[i];
    somaTotal += elementoAtual;
}

console.log(somaTotal);//10
// COM METODO REDUCE

const array1 = [ 0, 1 , 2 , 3, 4]

    const result = array.reduce((acumulador, valorActual)=>{
    return acumulador + valorActual;
    });
console.log(result);