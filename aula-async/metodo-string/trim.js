//METODO TRIM() remove os espacos em branco, tanto no inicio quanto no fim de um string.

const email = '   rina@email.com  ';
const formatado = email.trim();

console.log(`_${email}_`);// _    rina@email.com    _
console.log(`_${formatado}_`); //_rina@email.com_