const array = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
];

const arrayReducido = array.reduce((acumulador, valorActual, indice, array) => {
     
    return [...acumulador, ...valorActual]

}, [])//array todo juntado

console.log(arrayReducido);