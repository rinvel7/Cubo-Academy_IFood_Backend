//METODO SLICE(): Extrai uma parte de um texto (String) e retorna como um novo texto (string), sem modificar a string original. 
// Ele conta de tras para frente, retornando os ultimos caracteres do strig

// 'r i c a r d o'.slice ('r'); // retorna rdo
//          r d o  <----- de tras para frente

//var str1 ="A manha esta sobre nos", // tamaho 22 - posicao 21
// indice    01234......                                 

//str2 = srt1.slice(3, 10) // anha es/ A m anha es t .....
//                                     012 3456789 10 
//              ate o indice 3 ele e incluso ----- o numero 10 nao e incluso

//str3 = srt1.slice(2, -2)// manha esta sobre n ....
//                incluiu 2 -234               -2 nao incluso

//str4 = srt1.slice(13) // sobre nos
//               incluiu o 13 ate o final

//str5 = srt1.slice(22)// erro-> empty string porque supero o limite do strint

//str6 = srt1.slice(-3)// n o s
//                       -3-2-1 ele retorna os ultimos 3 incluso     

//EXERCICIO

//Obter apenas os dois digitos do estado de uma ciudade

const cidade = 'Rio de Janeiro-RJ';

let estadoDaCidade = cidade.slice(-2);//indice negativo

console.log(`O Estado da ciudade do Salvador e: ${estadoDaCidade}`)

//EJERCICIO DA PLATAFORMA

/* const penultinoIndex = cidade.length - 2
let estadoDaCidade = cidade.slice(penultinoIndex);

console.log(`O Estado da ciudade do Salvador e: ${estadoDaCidade}`)
 */