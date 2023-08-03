const deposito = 500;
const objetivo = 100000;
const rendimentoAnual = 0.1;


let conta = 0;
let meses = 0;

//todo ano ela rende 10%
//todo mes fazer um deposito

//quantos meses demora para chegar em 100.000

while (conta < objetivo) {
  conta += deposito;
  conta += conta * rendimentoAnual /12;
  meses += 1;
}

console.log("demorou", meses, "meses");
console.log("demorou", meses/12, "anos");