//SEUDO-CODIGO = falso codigo
// numero1
// numero2

//Operacao = "soma"

//Verificar se a Operacao e uma soma -> numero1 + numero2
//Se nao, verificar se a Operacao e uma sustracao -> numero1 - numero2
//se vao, verificar se a Operacao e uma multiplicacao -> numero1 x numero2
//se nao, verificar se a Operacao e uma divisao -> numero1 / numero2

let numero1 = 10;
let numero2 = 5;

const  operacao = "divisao";

  if (operacao === "soma") {
    console.log(numero1 + numero2);
  }else if (operacao === "sustracao") {
     console.log(numero1 - numero2);
  }else if (operacao === "multiplicacao") {
     console.log(numero1 * numero2);
  }else if (operacao === "divisao"){
    console.log(numero1 / numero2);
  }

//-----------------PLATAFORMA---------------------
  if (operacao === "soma") {
    return numero1 + numero2
  }else if (operacao === "sustracao") {
     return numero1 - numero2
  }else if (operacao === "multiplicacao") {
     return numero1 * numero2
  }else if (operacao === "divisao"){
    return numero1 / numero2
  }
