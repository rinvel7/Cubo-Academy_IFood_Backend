const pessoa = {
    nome: 'Rina',
    idade: 44,
    cidade: "Manaus",
    profissao: "Dev"
}

//DESESTRUTURA

const {nome, idade, ... outros} = pessoa;

console.log(nome, idade);
console.log(outros)

