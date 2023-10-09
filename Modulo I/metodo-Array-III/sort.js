//SORT: Ordena os elementos do propio array. Por padrao a ordenacao e de acordo con tabela unicode.
//Opcionalmente receve uma funcao callback que possui dos parametros, sendo eles o primeiro e o segundo elemento a ser comparado.

const array = [2, 4, 1, 20, 3, 43];

array.sort()// 1, 2, 20, 3, 4, 43

//funcao usada para determinar o orden de os elementos.

//EX. COM FUNCAO CALLBACK

const array1 = [2, 4, 1, 20, 3, 43];
//const retorna = 
array1.sort((a, b) =>{
    return a - b;
})//1, 2, 3, 4, 20, 43

//console.log(retorna);

//RETORNA:
// valor negativo - se o primeiro argumento e menor que o segundo.
// valor cero - se os argumentos sao iguais
// valor positivo - se o segundo argumentos e maior que o primeiro



