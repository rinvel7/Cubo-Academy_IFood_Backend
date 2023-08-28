//Crie uma funcao de array de objetos de usuarios que contengan as propiedades nome e idade.
// A funcao deve avaliar se todos os usuarios sao maiores de idade.
//Caso todos os usuraios sejan maiores, devera exibir a mensagem "Festa liberada", 
//Caso contrario, devera exibir a mensagem "Possui menor de idade".

const usuarios = [
    {nome: 'rina', idade: 44,},
    {nome: 'Pedro',idade: 14,},
    {nome: 'Laury',idade: 23,},
]

function verificarIdade(arrayDeUsuarios) {
     const resultado = arrayDeUsuarios.every(function(usuario) {//funcao callback
    return usuario.idade >= 18;    //validacao
});
    if (resultado){//true
        console.log('Festa liberada');
    } else {//fasle
        console.log('Possui menor de idade');
    }
}

verificarIdade(usuarios);

//a função verificarIdade aceita um parâmetro chamado arrayDeUsuarios que será usado dentro da função. Quando você chama verificarIdade(usuarios), você está passando o array de usuários como argumento para a função, e ela irá verificar se todos têm idade maior ou igual a 18.
