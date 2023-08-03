//clase1 -20 vidas
//clase2 -30 vidas
//clase3 -40 vidas
//clase4 -50 vidas

//vida = 40 

//                    VERIFICA AS CLASES    |   VERIFICA AS VIDAS                                  
//se a clase for 1 -> sustrair 20 da vida -> verificar se e menor ou igual a zero
//se nao a clase for 2 -> sustrair 30 da vida -> verificar se e menor ou igual a zero
//se nao a clase for 3 -> sustrair 40 da vida -> verificar se e menor ou igual a zero
//se caso contrario -> sustrair 50 da vida -> verificar se e menor ou igual a zero


//VERIFICA AS CLASES
const vida = 50;
let classe = 1;

let novaVida = 0;

if (classe === 1) {
  novaVida = vida - 20
} else if (classe === 2) {
   novaVida = vida - 30
} else if (classe === 3) {
   novaVida = vida - 40
} else {
   novaVida = vida - 50
}
 
 //VERIFICA AS VIDAS
if(novaVida <= 0) {
  console.log("PERDEU");
} else { 
  console.log(novaVida);
}

/*if (classe === 1) {
  
  novaVida = vida - 20
  if(novaVida <= 0) {
    console.log("PERDEU");
  } else { 
    console.log(novaVida);
  }

} else if (classe === 2) {
   
   novaVida = vida - 30
  if(novaVida <= 0){
    console.log("PERDEU");
  } else { 
    console.log(novaVida);
  }

} else if (classe === 3) {
   novaVida = vida - 40
  if(novaVida <= 0){
  console.log("PERDEU");
  } else { 
    console.log(novaVida);
  }

} else {
   novaVida = vida - 50
  if(novaVida <= 0) {
  console.log("PERDEU");
  } else { 
    console.log(novaVida);
  }
}*/

//------------------PLATAFORMA--------------------------

let novaVida = 0;

if (classe === 1) {
  novaVida = vida - 20
} else if (classe === 2) {
   novaVida = vida - 30
} else if (classe === 3) {
   novaVida = vida - 40
} else {
   novaVida = vida - 50
}
 
if(novaVida <= 0) {
  return "PERDEU"
} else { 
  return novaVida
}
