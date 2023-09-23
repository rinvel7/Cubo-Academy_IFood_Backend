const fs = require('fs/promises');


(async function (){
    const arquivosJson = await fs.readFile('teste.json');

    //DEVOLVE UM OBJETO JS QUE PODE SER MANIPULADO
    const pessoas = JSON.parse(arquivosJson)

    pessoas.push({
        nome:'Victor',
        idade: 70
    })

    //TRANSFORMA UM OBJETO JS NO JSON
    const arrayJson = JSON.stringify(pessoas)

    console.log(arrayJson);


})()