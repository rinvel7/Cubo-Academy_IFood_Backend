//OPERADORES LOGICOS : E - OU

//Operadores logicos (&& - || sempre resulta true ou false)
// OU (||) trabalha com um booleano do lado de outro booleano, 
//os quais deven ser falso para que o resulado seja falso.
//------------------------------------------------------  
// E (&&) trabalha com um booleano do lado de outro booleano, 
//os quais deven ser true para que o resulado seja verdadeiro.


//------------------PROBLEMA-----------------------
/* Ao resolver um problema, deve ter en conta as ENTRADAS
e as SAIDAS.

ENTRADAS: separar todas las posibilidades (EX: Idades e Carterinha)

SAIDAS: categorizar por a saida, oseja, pensar a forma de simplificar e seja facil de expresar (Ex: pago INTEIRA*/

//PROBLEMA:
// Menores de 18 -> Menor de idade (meia)
//Entre 18 e 60 -> Adultos (meia apenas com carterinha)
// Maiores de 60-> Idosos (meia) 



//----------------EXEMPLO DE SAIDA COM OU---------------
//MEIA -menor de idade OU idosa OU (adulta E tiver) carterinha
//INTEIRA - 0 resto

const idade = 25;
const temCarterinha = false;

const ehAdulto =  idade >= 18 && idade <= 60;

if (idade < 18 || idade > 60 || ( ehAdulto && temCarterinha)){//ENTRA EN IF SE ALGUMA DAS CONDICOES SAO VERDADERA
  console.log("MEIA");
} else {//ENTRA EN ELSE SE TODAS LAS IF SAO FALSAS
  console.log("INTEIRA");
}



//-----------------EXEMPLO DE SAIDA COM E---------------
//INTEIRA -Adulta e Nao tiver carterinha
//MEIA - 0 resto

const idade = 55;
const temCarterinha = false;//temCarterinha dentro do codigo deve ser falso tambem(!temCarterinha), entato false com false => true
//                   verdadero   =   verdadero  
const ehAdulto =  idade >= 18 && idade <= 60;
//eh adulto e nao tem carterinha =! => nao
if (ehAdulto && !temCarterinha) {
  console.log("INTEIRA");
} else {
  console.log("MEIA");
}




//-------------EXMPLO DE ENTRADA COM IF -ELSE---------
const idade = 75;
const temCarterinha = true;

if (idade < 18) {
  //menor de idade
  console.log ("MEIA");
} else if (idade <= 60) {
  //adulta
  if (temCarterinha === true) {
    //adulta tem temCarterinha
    console.log("MEIA");
  }else {
    //adulta sem temCarterinha
    console.log("INTEIRA");
  }
} else {
  //idosa
  console.log("MEIA")
}
