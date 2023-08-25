//METODO PADSTART(length, text) prenche uma string, colocando text no inicio dela (varias veces, se necesario) ate que a string atinja o tamanho length

const ultimo4dig = '2345';

const numCartao = ultimo4dig.padStart(19, '**** ');
console.log(numCartao);//**** **** **** 2345
