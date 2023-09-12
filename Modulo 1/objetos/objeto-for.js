const pessoa = {
    nome: 'Rina',
    idade: 44,
    altura: 1.63,
    temCNH : true,
    apelidos: ['Velasquez', 'Ramos']
}

//pograma para verificar si a pessona temCNH
let textoCNH = '';

if(pessoa.temCNH) {
    textoCNH = 'possui CNH'
}else {
    textoCNH = "nao possui CNH"
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m, ${textoCNH} e os seqiuentes apelidos:`); 
for(let apelido of pessoa.apelidos){
    console.log(`${apelido}`)
}