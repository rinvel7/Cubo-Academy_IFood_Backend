const fs = require('fs');
const fsPromises = require('fs/promises')

console.log('antes de ler');
//leitura sincrona
//const a = fs.readFileSync('a.txt').toString();
//console.log(a);

//Leitura assincrona sem promise
//fs.readFile('a.txt', (erro, data) => {
//    if (erro){
//        console.log(erro);
//    }else{
//        console.log(data.toString());
//    }
//})

//Leitura Assincrona com promise
//const a = fsPromises.readFile('a.txt'); 
//a.then((data)=>{
//    console.log(data.toString());
// });
// a.catch((erro)=>{
// console.log(erro);
//})

//leitura Assincrona con async-await
(async function(){
    const a = await fsPromises.readFile('a.txt');
    console.log(a.toString());
})();

console.log('depois de ler');


