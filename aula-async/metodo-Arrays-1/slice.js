//METODO SLICE () faz uma copia de parte de um array, retornando essa copia,

//O array original nao e modificado

const opcoes = ['Eu', 'Voce', 'Ele', 'Nos']
const resultado = opcoes.slice(1,3);
//1 e incluso (voce) 3 nao e incluso (nos,) por eso 2 e incluso 
console.log(resultado);//voce, ele
