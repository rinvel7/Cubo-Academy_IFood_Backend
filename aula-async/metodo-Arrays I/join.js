//METODO JOIN() junta todos os elementos de um array en uma string, separando-os como virgulas, e retorna esta string.

//Opcionalmente, pode-se passar uma string como argumento para ser colocado entre os itens.

//COLOCA O NOVO ELEMENTO ENTRE OS ITEMS
const opcoes = ['Um', 'Outra'];
let resultado = opcoes.join();
console.log(resultado); //um,Outra

resultado = opcoes.join('');
console.log(resultado);//UmOutra

resultado = opcoes.join(' ou ');
console.log(resultado);//Um ou Outra