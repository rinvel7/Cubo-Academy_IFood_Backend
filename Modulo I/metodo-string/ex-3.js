

function imprimirData(dia, mes, ano) {
    const diaFormatado = String(dia).padStart(2, '0');
    const mesFormatado = String(mes).padStart(2, '0');
    const anoFormatado = String(ano).padStart(2, '0');
    console.log(`${diaFormatado}/${mesFormatado}/${anoFormatado}`) 
}

imprimirData(1, 1, 2011)