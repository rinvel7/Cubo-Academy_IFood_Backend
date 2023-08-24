

function apresentar(pessoa){
    if(pessoa.idade < 21){
        return `Sou ${pessoa.nome}, sou um(a) pessoa  de ${pessoa.idade} anos, e sou ${pessoa.profissao},`
    }else if (pessoa.idade < 65){
        return `Sou ${pessoa.nome}, sou um(a) pessoa  de ${pessoa.idade} anos, e sou ${pessoa.profissao},`
    }else{
        return `Sou ${pessoa.nome}, sou um(a) pessoa  de ${pessoa.idade} anos, e sou ${pessoa.profissao},`
    }
}

const pessoa1 = 
    {
        nome: 'Jose',
        idade: 30,
        profissao: 'professor'
    }

console.log(apresentar(pessoa1))

const pessoa2 = {
    nome: 'Pedro',
    idade: 65,
    profissao: 'medico'
}
console.log(apresentar(pessoa2))

const pessoa3 = {
    nome: 'Ana',
    idade: 19,
    profissao: 'estudante'
}
console.log(apresentar(pessoa3))