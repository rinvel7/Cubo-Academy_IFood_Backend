function etariaDaPessoa(idade) {
    if(idade < 21){
       return 'Jovem'
    }else if(idade < 66) {
       return 'adulto (a)'
    }else{
        return 'idoso (a)'
    }
}

function apresentar(pessoa){
    const etaria = etariaDaPessoa(pessoa.idade)
 
        console.log (`Ola!, meu nome e ${pessoa.nome}, sou um(a) ${etaria}  de ${pessoa.idade} anos, ${pessoa.altura}m, e sou ${pessoa.profissao},`)
}


const pessoa1 = 
    {
        nome: 'Jose',
        idade: 78,
        altura: 1.73,
        profissao: 'professor'
    }

apresentar(pessoa1)
