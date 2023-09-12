//O QUE E DECLARADO DENTRO DA FUNCAO NAO E POSIVEL ACESAR DESDE AFORA DA FUNCAO
 // O QUE E DECLARADO FORA DA FUNCAO E POSIVEL ACESAR DENTRO E FORA DA FUNCAO

 let z = 3;

function soma(x, y){
    //let z = 3;
    return x + y + z; //8 com z = 11
}

//console.log(soma(5,3))//8

//console.log(x);//erro porque x esta fora do escopo da funcao

console.log(soma(5,3))//11 porque z esta dentro da funcao, e se estivese a fora ele e posivel acesar