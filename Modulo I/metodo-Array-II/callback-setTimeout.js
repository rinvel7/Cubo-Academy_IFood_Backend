//CLALBACK e uma fi=uncao que receve a outra funcao.


/* En este ejemplo, la función hacerAlgoAsync simula una operación asíncrona que toma 2 segundos en completarse. La función miCallback es el callback que se pasa como argumento a hacerAlgoAsync, y se ejecutará después de que la tarea asíncrona termine. Esto permite que la ejecución continúe sin esperar a la tarea asíncrona. */

//EXEMPLO
/* function hacerAlgoAsync(callback) {
    setTimeout(function() {
        console.log("Tarea asíncrona completada");
        callback(); // Se llama al callback después de la tarea
    }, 2000);
}

function miCallback() {
    console.log("Callback ejecutado");
}

hacerAlgoAsync(miCallback);
console.log("Tarea principal completada"); */// primeiro mensage, mentras se espera que a funcao fazer algo asyncrono se ejecute.

//setTimeout: ele e uma funcao que estavelece uma um temporizador que executa uma parte do codigo especifico.


//ALGUMAS SINTAXIS
// 1. forma
/* setTimeout(function() {
        console.log("Rina Velasquez");
    }, 2000);
 */
// 2. forma
/* function imprimeRina() {
    console.log("Rina Velasquez");
} 

setTimeout(imprimeRina, 2000);
*/
//3.forma Arraou Function
setTimeout(() =>{
    console.log("Rina Velasquez");
},2000)



