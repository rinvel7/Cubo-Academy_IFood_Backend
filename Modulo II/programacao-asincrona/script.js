 const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

/*getCityFromZipcode('69090355').then(cidade =>{
    console.log(cidade);
}).catch((erro)=>{
    console.log(erro);
}) */


(async function(){
    const cidade = await getCityFromZipcode('69090355')
    console.log(cidade);

    const estado = await getStateFromZipcode('69090355')
    console.log(estado);
})()