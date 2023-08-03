/* o objetivo desse exercicio e retornar se o numero
de entrada e divisivel por x ou nao. Seu programa 
recebera sempre de entrada um numero enteiro e outro 
numero enteiro representando x e devera imprimir na 
tela se o  primeiro numero de entrada e divisivel 
por x.

ENTRADA
A entrada sera sempre 2 numeros inteiros

SAIDA
A saida devera ser sempre true ou false

EXEMPLO
ENTRADA 1
10 2
SAIDA ESPERADA
true

EXPLICACAO
10 e divisivel por 2
*/

function solucao(numero1, numero2){
  const resto = numero1 % numero2;
  const resposta = resto === 0;

  console.log(resposta);
}


