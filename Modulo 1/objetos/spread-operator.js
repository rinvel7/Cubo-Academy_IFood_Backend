//SPREAD-OPERATOR: Adjunta as propiedades de dois objetos

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

const objetoAjuntado = {//variavei que ajunta as propiedades dos objetos acima.
    ...pessoa,
    ...endereco,
    novaPropiedade: 20
};

console.log(objetoAjuntado)