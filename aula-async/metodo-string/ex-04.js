//transforme 'jose messias junior'
//em Jose Mesias Junior

const nomeCompleto = 'jose messias junior';
const arrayDeNomeCompleto = nomeCompleto.split(' ');



let nomeFormatado = '';
for(let letra of arrayDeNomeCompleto){
    //transformar a inicial de cada item em maiscula
    let primeiraLetra = letra.slice(0, 1);//0 letra inclusa, 1letra nao inclusa 
    let restanteDeNome = letra.slice(1);
    nomeFormatado += primeiraLetra.toLocaleUpperCase() + restanteDeNome + ' ';
    
}

console.log(nomeFormatado.trim());







