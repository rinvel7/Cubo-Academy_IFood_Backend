/* 
let lista = ['a','b','c','d','e'];
lista.splice(1,2, 'f', 'g', 'h');
console.log(lista);

 
lista = ['a','b','c','d','e'];
lista.splice(1,2);
console.log(lista);//a d e

//puch (adiciona ao ultimo)
lista = ['a','b','c','d','e'];
lista.splice(lista.length, 0, 'f', ' g', 'h', 'i');
console.log(lista); //a b c d s f g h i */
//pop (remove o ultimo)
lista = ['a','b','c','d','e'];
lista.splice(lista.length -1, 1);
console.log(lista);
//shitf (remove ao inicio)
lista = ['a','b','c','d','e'];
lista.splice(0,1);
console.log(lista);
//unshift (adiciona ao inicio)
lista = ['a','b','c','d','e'];
lista.splice(0,0, 'f');
console.log(lista);