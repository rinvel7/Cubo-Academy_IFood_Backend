//LOCALECOMPARE() retorna um numero que indica se a string de referencia vem anres, depois ou e igual a string comparada.

const letraA = 'a';
const letraC = 'c';

letraA.localeCompare(letraC) //VALOR NEGATIVO - retorna a
console.groupCollapsed(letraA)

letraC.localeCompare(letraA) //VALOR POSITIVO - retorna c
console.groupCollapsed(letraC)

letraC.localeCompare(letraC) //VALOR cero - retorna c
console.groupCollapsed(letraC)
