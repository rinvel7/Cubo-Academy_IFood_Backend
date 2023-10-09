const numeros = [1, 4, 4, 4, 5, 3, 1, 8 ];
const nomes =  ['joana', 'maria', 'joao', 'maria', 'jose']

const resultadoNumero = numeros.filter((numero) =>{
    return numero === 4;
});

const resultadoNome = nomes.filter((nome) =>{
    return nome === 'maria';
});

console.log(resultadoNumero);
console.log(resultadoNome);