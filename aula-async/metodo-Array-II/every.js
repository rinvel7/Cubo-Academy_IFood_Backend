//EVERY: testa se todo os elementos do array passam pelo teste implementando na funcao callback, passando como argumento e retorna true ou false.

const numeros = [1, 2, 3, 4];
//                              Arrou Function
const resultado = numeros.every((numero) => {
    return numero !== 5 //true
     
});//true

console.log(resultado);


//Nesse exemplo, every verifica cada numero do array numeros e menor que 5

