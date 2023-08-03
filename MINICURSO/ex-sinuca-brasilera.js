//jogadorA =[4, 7, 1, 10, 15]

// somar os numeros as bolas de jogadorA
// achar soma jogadorB -> 120 - soma jogadorA
//comparar:
// se a soma jogadorA for maior -> JOGADORA GANHOU
//se nao,verifico se a soma jogadorB for maior -> JOGADORB GANHOU
// caso contrario -> EMPATE

let jogadorA = [13, 14, 11, 10, 15, 9]

//somaJugadorA suma os item do array
let somaJugadorA = 0;

//for cria uma variavei item que vai recorrer o array jugadorA
for(const item of jogadorA){
// somaJugadorA vai sumar e acumular os item do array somaJugadorA
  somaJugadorA += item;
 }
 
 let somaJugadorB = 120 - somaJugadorA
 
 if(somaJugadorA > somaJugadorB){
  console.log("JOGADOR A GANHOU", somaJugadorA);
 } else if (somaJugadorA < somaJugadorB){
  console.log("JOGADOR B GANHOU", somaJugadorB);
 }else{
   console.log("EMPATE", somaJugadorA);
 }


