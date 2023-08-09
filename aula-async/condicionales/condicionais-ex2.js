//produto a vista com desconto 10%
//parcela sem juros sem desconto 6x
//imprima como o cliente tem  que pagar, incluindo valor da parcela

const valorDaCompra = 100;
const numeroDeParcelas = 1;



if(numeroDeParcelas === 1){
    const desconto = (valorDaCompra*10)/100;
    const totalApagar = valorDaCompra - desconto;
    console.log(`Voce tem 10% desconto e deve pagar ${totalApagar} reais`);      
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Vove nao tem desconto e deve pagar em ${numeroDeParcelas} sem juros de parcela de R$.${valorDaParcela} reais`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    const valoAPagarComJuros = (valorDaCompra * (1 + 1/100) ** numeroDeParcelas).toFixed(2);
    const valorDaParcela = (valoAPagarComJuros / numeroDeParcelas).toFixed(2);
    console.log(`Voce deve pagar em ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando  R$ ${valoAPagarComJuros}, devido a incedencia de juros`)
} else {
    console.log("numeros de parcelas invalido")
}