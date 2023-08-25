//SLICE
//Descartar os primeiros 10%
//descartar os ultimos 10%


function filtrar80(dados) {

    const starIndex = Math.round(dados.length * 10/100);// indice 3 incluso
    const endIndex = Math.round(dados.length * 90/100);//indice 23 nao incluso
    const fatia = dados.slice(starIndex, endIndex)
    
    console.log(fatia)
}
const dados = [0,1,5,7,10,33,55,60,57,85,45,68,49,57,69,89,57,33,24,11,5,3,1,0,0];

filtrar80(dados)

