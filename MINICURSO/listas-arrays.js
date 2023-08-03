const listaDeNumeros = [34, 14, 56, 768, 8, 81, 3, 10]


//Qual a soma deles?

let acumulador = 0;//vai guardando e sumando cada numero

for (const numero of listaDeNumeros) {
  acumulador += numero;//acumulador = acumulador + numero
}
console.log("A soma e" , acumulador);



// Qual o menor deles?

let oMenorNumeroAteAgora;//nao se inicializa a variavei porq nao se sabe que numero e o menor.

for (const numero of listaDeNumeros ){
  if (oMenorNumeroAteAgora === undefined){ 
      oMenorNumeroAteAgora = numero;
  } else {
    if (numero < oMenorNumeroAteAgora){
      oMenorNumeroAteAgora = numero;
    }
  }
}
console.log("O menor numero e", oMenorNumeroAteAgora);
