//METODO INDEXOF() ele busca a primeira ocurrencia do indice do caracter que se esta procurando.

//VALOR RETORNADO: retorna um numero onde se encontra o caracter, caso contrario retorna -1.

//EX:
//- saber se um email e valido
//-tem que ter pelo menos un @
//-tem que ter meons um ponto depois de @

/* const email = 'rina@email.com';

const indexArroba = email.indexOf('@');
const indexPonto = email.indexOf(',');

if (indexArroba > indexPonto){
    console.log('Email e valido');
}else{
    console.log('Email e invalido');
} */

const email = 'rina.velasquez@email.com';

const indexArroba = email.indexOf('@');//4 index
const indexPonto = email.indexOf(',', indexArroba);

if (indexArroba > indexPonto){
    console.log('Email e valido');
}else{
    console.log('Email e invalido');
}