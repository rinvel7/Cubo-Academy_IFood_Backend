//setINverval: ele chama a uma funca o executa uma parte de codigo de forma reiterada, com un retraso de tempo fixo entre cada chamada.

function imprimir() {
    console.log('Ola Rina');
    clearInterval(intervalID)//
}

const intervalID = setInterval(imprimir, 500);