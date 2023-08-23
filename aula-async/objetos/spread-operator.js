const pessoa = {
    nome: 'Rina',
    idade: 44,
    cidade: "Manaus",
    profissao: "Dev"
};

const endereco = {
    rua: 'Aqui',
    numero: '32',
    barrio: 'Beleza'
}

const objetoAjuntado = {
    ...pessoa,
    ...endereco,
    novaPropiedade: 20
};

console.log(objetoAjuntado)