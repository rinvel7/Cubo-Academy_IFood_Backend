//ORDENACAO CRESCENTE

const array2 = [2, 4, 1, 20, 3, 43];
    array2.sort((a, b) =>{
        return a - b;
});

console.log(array2);


//ORDENACAO DECRESCENTE
const array3 = [2, 4, 1, 20, 3, 43];
    array3.sort((a, b) =>{
        return  b - a;
});

console.log(array3);
