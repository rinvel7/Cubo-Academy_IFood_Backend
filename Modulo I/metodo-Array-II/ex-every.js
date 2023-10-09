const frutas = ['abacaxi', 'manga', 'melancia'];

const resultado = frutas.every(function(elementoAtual){
    return elementoAtual !== 'banana';  
});

console.log(resultado);//true

// Neste exemplo every verifica que banana e diferente a os elementos do array de frutas