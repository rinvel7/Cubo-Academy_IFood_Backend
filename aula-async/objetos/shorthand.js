//SHORTHAND: Um objeto dentro de outro objeto

const carro = {//isso esta dentro do objeto pessoa
        marca: 'Toyota',
        modelo: 'Etios',
        ano: 2020,
        potenica:80
    };

    const minhaAltura = 1.73;

const pessoa = {
    nome: 'Rina',
    idade: 44,
    altura: minhaAltura,
    carro//isso e um shorthand! Acima esta a variavei e propiedade de ese objeto
};
//console.log(pessoa.carro)//imprime todo sobre o carro
//console.log(pessoa.carro.marca)//improme so a marca

console.log(pessoa);