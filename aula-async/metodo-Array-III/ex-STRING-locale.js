//LOCALE.COMPARE compara o string, tenha, puntuacao, maiuscula, etc. 

const pessoas = ['Joao', 'ana', 'carlos', 'beatriz'];

pessoas.sort((a, b)=> {
    return a.localeCompare(b)
});

console.log(pessoas);//[ 'ana', 'beatriz', 'carlos', 'Joao' ]

const pessoas1 = ['Joao', 'ana', 'carlos', 'beatriz'];

pessoas1.sort((a, b)=> {
    return b.localeCompare(a)
});

console.log(pessoas1);//[ 'ana', 'beatriz', 'carlos', 'Joao' ]