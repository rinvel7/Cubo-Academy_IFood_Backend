//condicao: expressao que sera valida como verdadeiro ou false
//expr1: caso a condicao seja verdadeira expr1 e retornado
//expr2: casso a condicao seja falsa a expr2 e retorndada

const saldo = 10;
                //condicao     expr1     expr2
const unidade = (saldo === 1 ? "real" : "reais");
//e mesma coisa de arriba
/* if (saldo === 1) {
    unnidade = "real"
}else{
    unidade = "reais"
} */

console.log(`Voce tem ${saldo} ${unidade}`);

//if (saldo === 1 ){
//console.log(`Voce tem ${saldo} real`);
//}else{
//   console.log(`Voce tem ${saldo} reais`);
//}