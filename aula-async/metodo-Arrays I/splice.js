//METODO SPLICE() altera o conteudo de uma lista, REMOVENDO zero ou mais itens de um array num determinado indice.

//Opcionalmente, pode-se inserir um ou mais itens no local onde outrso foram deletados

const lista = ['a','b','c','d','e'];
lista.splice(1,2, 'f');//1 inicia modificacao, 2 quantos elementos vao a pagar e "f" elemento que vao inserir
console.log(lista);//a,f,d,e
