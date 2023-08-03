

//conta cantidade de promotores
  //recorrer item por item
  //ver se este item e 9 e 10
  //se sim, somar na quantidade de promotores

//conta cantidade de detratores 
  //recorrer item por item
  //ver se este item e 0 entre 6
  //se sim, somar na quantidade de detratores

//conta totalDeClientes entrevistados
  //soma promotores e detratores


//fazer calculoNps = (promotores - detratores) / totalDeClientes * 100 
let repostas = [5, 10, 0, 6, 10, 10, 9, 8, 10, 5]

let quantidadePromotores = 0;
let quantidadeDetratores = 0;

//para cada item de array
for(let item of repostas) {
  if(item === 9 || item === 10) {//verificar sim cada item e promotores ou detratores e somar
    quantidadePromotores += 1 //quantidadePromotores = quantidadePromotores + 1 //quantidadePromotores++
  } else if (item >= 0 && item <= 6) { //else if(item === 0 || item === 1 || item === 2 || item === 3 || item === 4 ||item === 5 ||item === 6)
    quantidadeDetratores++
  }0
}

let totalDeClientes = repostas.length //conta cada item array

let nps = (quantidadePromotores - quantidadeDetratores) / totalDeClientes *100

console.log(nps)

//------------------PLATAFORMA------------------


let quantidadePromotores = 0;
let quantidadeDetratores = 0;

for(let item of repostas) {
  if(item === 9 || item === 10) {
    quantidadePromotores += 1 
  } else if (item >= 0 && item <= 6) { 
    quantidadeDetratores++
  }
}

let totalDeClientes = repostas.length 

let nps = (quantidadePromotores - quantidadeDetratores) / totalDeClientes *100

return nps
