//Crie uma funcao que percorra um array com nomes de arquivos. 
//A funcao deve verificar sepossui ao menos un rquivo como a extencao ".bat".
//Caso exista, devera exibir a mensagem "virus detectado".
//Caso contario, devera exibir um mensagem "nehum virus encontrado".


const arquivos = [ '.teste.txt', 'foto.png', 'contrato.doc', 'instalador.exe']

 
function nomeDeArquivos(arrayDeArquivo) {
    const resultado = arrayDeArquivo.some((arquivo)=>{//metodo some testa cada um dos elementos
        const existeExtensao = arquivo.indexOf('.bat');
            return existeExtensao !== -1; 
    });
    if(resultado){
        console.log('virus detectado')
    }else{
        console.log('nehum virus encontrado')
    } 
}

nomeDeArquivos(arquivos)

/* A função que você forneceu também funciona para verificar se há algum arquivo com a extensão ".bat" no array, usando o método indexOf(). O método indexOf() retorna o índice da primeira ocorrência de uma substring em uma string ou um valor negativo se a substring não for encontrada. No seu caso, se existeExtensao for diferente de -1, isso significa que a extensão ".bat" foi encontrada no nome do arquivo. */

//RESOLVIDO PLATAFORMA
/* 
const antivirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo)=>{
        const existeExtensao = arquivo.indexOf('.bat');
            return existeExtensao !== -1;
    });
 
    if(resultado){
        console.log('virus detectado')
    }else{
        console.log('nehum virus encontrado')
    } 
} */