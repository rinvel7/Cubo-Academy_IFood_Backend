//A final foi vencido pelo Brasil con 2 gols de Ronaldo Fenomeno
//1. O primeiro aos 22 minutos do segundo tempo
//2. Osegundo aos 34 minutos do segundo tempo sabendo que um tempo tem 45min e que sao 15 min de intervalo, 
//Crie dois objetos com datas em que ocorreram cada um dos gols. Use Timestamps.


const finalDaCopa = new Date(2002, 5, 30, 8);
const inicioTimestam = +finalDaCopa;

const primeiroGolTimestamp = inicioTimestam + (45+15+22)*60*1000;
const primeiroGolDate = new Date(primeiroGolTimestamp)

console.log(primeiroGolDate);
console.log(new Date(+finalDaCopa + (45+15+22)*60*1000));