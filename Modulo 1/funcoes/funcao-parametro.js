//FUNCOES COM PARAMETRO
function cumprimentar (pessoa) {//parametro e uma variavei (pessoa) e como se for let pessoa = 'Jose', onde jose e o valor do parametro
    console.log(pessoa); 
}

cumprimentar('Jose',25);
cumprimentar('Joao', 14);
cumprimentar('Rina', 40);

//FUNCOES COM MAS PARAMETROS
function cumprimentar (pessoa, idade) {//parametro e uma variavei (pessoa) e como se for let pessoa = 'Jose', onde jose e o valor do parametro
    console.log(`Ola, ${pessoa} voce tem ${idade}`); 
}