//E um numero que  registrar la fecha y la hora exactas en que ocurrió una operación o transacción, lo que es fundamental para llevar un registro cronológico de eventos.

const finalDaCopa = new Date(2002, 5, 30, 8);
const finalMaisUmaHora = +finalDaCopa + 1000*60*60;
const maisUmaHoraDate = new Date(finalMaisUmaHora);

console.log(finalDaCopa, maisUmaHoraDate)