//precos = [100, 500, 100, 200, 50]

//Promocao a partir de 5 produtos.
  //verificar quantos produtos compro o cliente :
  // se compro += de 5 productos -> TEM DESCONTO.
  // caso contrario -> NAO TEM DESCONTO.
  
//Um Dos 5 produtos, o mais barato saira de graca:
  // somar todos os produtos.
  //O produtos mais barato sera descontado do total de produtos -> DE GRACA 

let precos = [100, 500, 100, 200, 50]

let soma = 0;
let produtoMaisBarato = precos[0];

for(let item of precos){
  soma = soma + item; 
  if(item < produtoMaisBarato){
    produtoMaisBarato = item;
  }
}

if (precos.length >= 5){
  console.log("TEM PROMOCAO, TOTAL A PAGAR", soma - produtoMaisBarato)
}else{
  console.log("NAO TEM PROMOCAO, TOTAL A PAGAR", soma)
}




