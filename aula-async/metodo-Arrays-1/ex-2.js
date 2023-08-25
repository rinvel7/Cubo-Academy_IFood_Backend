function inverterString(texto) {
   
    const arrayDeletras = texto.split('');//ele separa as palavra en caracteres como si foise array- c,u,b,o,...
    arrayDeletras.reverse()//ele reverte as letras
  
    const textoInvertido = arrayDeletras.join('')  //junta os arrays em string
    
    console.log(textoInvertido);//ymedaca sobuc
};

inverterString('cubos academy')