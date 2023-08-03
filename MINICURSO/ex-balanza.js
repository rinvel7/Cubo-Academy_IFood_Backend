//EX. BALANZA

let pecoLadoA1 = 10;
let pecoLadoA2 = 20;

let pecoLadoB1 = 20;
let pecoLadoB2 = 10;

const somaLadoA = pecoLadoA1 + pecoLadoA2;
const somaLadoB = pecoLadoB1 + pecoLadoB2;

if (somaLadoA > somaLadoB) {
  console.log("LADO A");
} else if (somaLadoA < somaLadoB){
  console.log("LADO B");
} else {
  console.log("EQUILIBRIO")
}

//---------------------PLATAFORMA--------------------

const somaLadoA = pecoLadoA1 + pecoLadoA2;
const somaLadoB = pecoLadoB1 + pecoLadoB2;

if (somaLadoA > somaLadoB) {
  return "LADO A"
} else if (somaLadoA < somaLadoB){
  return "LADO B"
} else {
  return "EQUILIBRIO"
}

