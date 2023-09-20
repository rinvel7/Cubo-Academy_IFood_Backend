const express = require('express');
const { getCityFromZipcode } = require('utils-playground')


const app = express()

app.get('/', async (req, res)=>{
    const cidade = getCityFromZipcode ('69090355')
    const cidade2 = getCityFromZipcode ('44380000')

    const promise = await Promise.all([cidade, cidade2]);
    const [resposta1, resposta2] = promise
        //console.log(cidade, cidade2);

    res.send(`A cidade encontrada foi: ${resposta1} e ${resposta2}`);
});

app.listen(3000);