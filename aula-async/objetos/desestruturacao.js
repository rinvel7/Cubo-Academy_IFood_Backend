//DESESTRUTURAR: Pegar so as propiedades que precisamos.


const pessoa = {
    nome: 'Rina',
    idade: 44,
    cidade: "Manaus",
    profissao: "Dev"
}

//Sintaxis

const {nome, idade, ... outros} = pessoa; //so tomamos do objeto pessoa as propiedade nome e idade

console.log(nome, idade);
console.log(outros)// tambem e um spread-operator

