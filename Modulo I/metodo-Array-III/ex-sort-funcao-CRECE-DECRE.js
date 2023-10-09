const array1 = [2, 4, 1, 20, 3, 43];
//const retorna = 
array1.sort((a, b) =>{
    return a - b;
})//1, 2, 3, 4, 20, 43

//console.log(retorna);

//RETORNA:
// valor zero - se os argumentos sao iguais
// valor negativo -  se o primeiro argumento e menor que o segundo ou menor que zero
// valor positivo - se o segundo argumentos e maior que o primeiro ou que zero.

//ORDENACAO CRESCENTE

const array2 = [2, 4, 1, 20, 3, 43];
    array2.sort((a, b) =>{
        if(a < b){
            return -1;
        }
        if(a > b){
            return 1;
        }
        return 0;
});

console.log(array2);


//ORDENACAO DECRESCENTE
const array3 = [2, 4, 1, 20, 3, 43];
    array3.sort((a, b) =>{
        if(a < b){
            return 1;
        }
        if(a > b){
            return -1;
        }
        return 0;
});

console.log(array3);
