
//DECLARACAO DE UMA VARIAVEL
let precoProduto1 = 29.50;
console.log("Preso do produto 1 e" , precoProduto1);

//----------------AUMENTTO DE PRECO-------------------------


//----------- ATRIBUCAO DE UMA VARIAVEL---------------------
precoProduto1 = 30.50;
console.log("Preso do produto 1 e" , precoProduto1);

//OUTRO JEITO DE ATRIBUCAO DE UMA VARIAVEL 
precoProduto1 = precoProduto1 + 1.0;
console.log("Preso do produto 1 e" , precoProduto1);

//A VARIAVEL DE ARRIBA E A MESMA COISA DA VARIAVEL DE ABAIXO
// E A FORMA CONTRAIDA E ATUALMENTE USADA.
precoProduto1 += 1.0;
console.log("Preso do produto 1 e" , precoProduto1);

//-------------------DESCONTO NO PRECO----------------------

//precoProduto1 = precoProduto1 * 0.8;
//console.log("Preso com desconto do produto 1 e" , precoProduto1);

//A VARIAVEL DE ARRIBA E A MESMA COISA DA VARIAVEL DE ABAIXO
//precoProduto1 *= 0.8;
//console.log("Preso com desconto do produto 1 e" , precoProduto1);


//A VARIAVEL DE ARRIBA E A MESMA COISA DA VARIAVEL DE ABAIXO,

//--------------PARA UN CODIGO MAIS LEGIVEL-----------------

const desconto = precoProduto1 * 0.2;
precoProduto1 -= desconto;
console.log("Preso com desconto do produto 1 e" ,  precoProduto1);