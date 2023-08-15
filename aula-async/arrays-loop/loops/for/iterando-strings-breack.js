const palavra = 'Alemana';

let encontrado =  false;//inicia em false porque ainda nao a encontrado
for(let letra of palavra){
    if (letra === 'h'){
        console.log( 'Tem a letra h');
       encontrado = true; //caso encontre  a letra h ele para a iteracao
        break;
    }
}
if(!encontrado){ //caso  nao encontre a letra h acima ele continua ao if
console.log( 'Nao tem a letra h');
}