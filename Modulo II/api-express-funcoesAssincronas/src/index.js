//EXERCICIO RESOLVIDO
//Continuando a implemetacion da API utilizando funcaoes asincronas
//crie uma rota GET /pacote/:nomePacote que retorne a descripcao de um pacote do npm. 
//Para obter a descrcao do pacote, utilize a funcao getPackageDescriptionNpm que existe no pacote utils-playground, passando o nome do pacote como argumento.

const express = require('express');
const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground')


const app = express()

app.get('/', async (req, res)=>{
    const cidade = getCityFromZipcode ('69090355')
    const cidade2 = getCityFromZipcode ('44380000')

    const promise = await Promise.all([cidade, cidade2]);
    const [resposta1, resposta2] = promise
        //console.log(cidade, cidade2);

    res.send(`A cidade encontrada foi: ${resposta1} e ${resposta2}`);
});

//EXERCICIO 1
app.get('/pacote/:nomePacote', async (req, res) =>{
    const { nomePacote } = req.params;

    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    return res.send(descricaoPacote);
});

//navegador: localhost:3000/pacote/express

app.listen(3000);