function inverterString(texto) {
   
    const arrayDeletras = texto.split('');//ele separa as palavra en caracteres - c,u,b,o,...
    arrayDeletras.reverse()//ele reverte as letras
    //junta os carateres, concatenando cada um 
    let textoInvertido = '';
    for(let letra of arrayDeletras){
        textoInvertido += letra
    }
    console.log(textoInvertido);
};

inverterString('cubos academy')