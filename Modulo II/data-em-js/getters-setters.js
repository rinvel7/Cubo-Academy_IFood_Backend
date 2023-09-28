const hoje = new Date();

//GETTERS
//Obtiene el mes
//console.log(hoje.getMonth());

//Obtiene el dia
//console.log(hoje.getDay());

//SETTERS
//obten a data actual
hoje.setDate(hoje.getDate());
console.log(hoje);

//obten a data de 5 dias atras
hoje.setDate(hoje.getDate() -5);
console.log(hoje);
