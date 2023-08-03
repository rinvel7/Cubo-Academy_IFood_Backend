/*PROBLEMA
Voce esta desemvolvendo un jogo da forca para seu empresa.
No jogo da forca, o usuario tem que descubrir qual e a 
palavra que esta "escondida" escolhendo letras que ele
acredita que esta contida nessa palavra.

Seu papel como desenvedor e fazer a parte do codigo
que ao receber a letra palpite do usuario e a palavra
escondida, retornara a quantidade de acertos obtidos
pelo usuario nesse palpite

ENTRADA
A entrada sera siempre duar string, o palpite feito pelo
jogador e a palavra a ser descoberta. O palpite sera siempre
apenas un caractere minisculo e sem acento. A palavra
sera sempre composta apenas por caracteres minusculos e semp
acentos.

SAIDA
a saida sempre sera a cantidade de acertos do palpite.
*/
let = quantidade = 0;

function solucao(palpite, palavra) {
  for (const letra of palavra) {
    if (letra === palpite) {
    quantidade += 1;
    }
  }
    console.log(quantidade);

  
  
}