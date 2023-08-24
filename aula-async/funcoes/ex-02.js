function etariaDaPessoa(idade) {
    if(idade < 21){
        return 'Jovem'
    }else if(idade < 66) {
        return 'adulto (a)'
    }else{
        return 'idoso (a)'
    }
}

//const valorRetornadoPelaFuncao = etariaDaPessoa(80)
//console.log(valorRetornadoPelaFuncao);

console.log(etariaDaPessoa(80));