// || so da verdadero quando alguma das condicoes ou expresoes foisen verdadeiras

const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComOsPais = true;
// tem ingresso E
// tem idade maior ou igual censura OU esta com os Pais
 
/*if (temIngresso === true){
    if(idade >= censura || estaComOsPais === true)  {
    console.log("Pode entrar");
    } else {
        console.log("Barrada")
    }
} else {
    console.log("Barrada");
}*/

if (temIngresso){
    if(idade >= censura || estaComOsPais)  {
    console.log("Pode entrar");
    } else {
        console.log("Barrada")
    }
} else {
    console.log("Barrada");
}