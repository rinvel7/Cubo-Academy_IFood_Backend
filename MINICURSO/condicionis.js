//------------------CONDICIONAIS------------------
/*const condicao = 3 < 2;

if (condicao) {
  console.log("e verdade");
}else{
  console.log("e falso");
}
console.log("acabou")*/

let precoDoProducto1 = 15.29;
let precoDoProducto2 = 2.80;
let precoDoProducto3 = 4.85;

let custo = 0;

if (precoDoProducto1 <= 18) {
  console.log("Comprei o produto 1");
  custo += precoDoProducto1;
}
if (precoDoProducto2 < 3){
  if (precoDoProducto2 >= 1.5) {
    console.log("Comprei o produto 2");
    custo += precoDoProducto2;
  }else {
    console.log("Tem algo errado com o produto 2");
  }
}

console.log( "Comprei o produto 3");
custo += precoDoProducto3;

console.log("Eu paguei", custo, "reais.");