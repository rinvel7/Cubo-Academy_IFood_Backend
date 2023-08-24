const pessoaobj = 
    {
        nome: 'Rina',
        idade: 44,
        profissao: 'Dev',
        altura: 1.63
    }

    function apresentacaoDeUmaPessoa(pessoa){
        console.log(`ola, meo nome e ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
    }

    apresentacaoDeUmaPessoa(pessoaobj)

