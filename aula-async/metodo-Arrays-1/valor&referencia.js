//VALOR & REFERENCIA

//      | number    |
//      | string    |
//      | booleanos |
//VALOR | Nan       | PRIMITIVOS: JS faze uma copia
//      | Null      |
//      | Undefine  |

let numero1 = 5;
let numero2 = numero1;
numero1 = 10;
console.log(numero1);// 10
console.log(numero2);// 5

let text1 = 'abra';
let text2 = text1 
text1 = text1 + 'cadabra';
console.log(text1);// abracadabra
console.log(text2);// abra

//            | Object    |
//            | Arrays    | 
// REFERENCIA | Todo o    | OBJETOS: JS faze uma 
//            | demas     | referencia ao dado original

let obj1 = {prop: 5};
let obj2 = obj1;
obj1.prop = 10;
console.log(obj1)//10
console.log(obj2)//10

let array1 = [1,2,3];
let array2 = array1;
array1.push(4);
console.log(array1);//1 2 3 4 
console.log(array2);//1 2 3 4

