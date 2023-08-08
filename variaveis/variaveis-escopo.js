//As chaves, cria um ESCOPO
//COMO CRIAR UM ESCOPO
//para acesar a variavel tem que estar dentro do escopo, 

{
    const idade = 44;
  
    console.log(idade);
    
}
//se a variavel esta dentro do escopo e se ao tratar de acesar fora do escopo, vai dar erro, 

//{
//    const idade = 44;   
//}
//console.log(idade);

//se a variavel esta fora das chaves e o aceso dentro das chavez, pode acesar!!
const idade = 44;
{    
    console.log(idade); 
}

//escopo dentro de escopo

{    const idade = 44;
    {
        console.log(idade);   
        let nome = "Rina";
        console.log(nome);
    }
    
}