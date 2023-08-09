//produto a vista com desconto 10%
//parcela sem juros sem desconto 6x
//imprima como o cliente tem  que pagar, incluindo valor da parcela

const valorDaCompra = 100;
const numeroDeParcelas = 3;

const desconto = (valorDaCompra*10)/100;
const totalApagar = valorDaCompra - desconto;

if(numeroDeParcelas === 1){
    console.log(`Voce tem 10% desconto e deve pagar ${totalApagar} reais`);      
} else {
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);
    console.log(`Vove nao tem desconto e deve pagar ${numeroDeParcelas} parcela de R$.${valorDaParcela} reais`);
}