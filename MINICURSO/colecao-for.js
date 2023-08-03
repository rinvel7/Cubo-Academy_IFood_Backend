const palavra = "Abacate";

let numeroDoVogais = 0;

for (const letra of palavra) {
  console.log(letra)
  if (letra === "a" ) {numeroDoVogais += 1}
  if (letra === "e" ) {numeroDoVogais += 1}
  if (letra === "i" ) {numeroDoVogais += 1}
  if (letra === "o" ) {numeroDoVogais += 1}
  if (letra === "u" ) {numeroDoVogais += 1}

  if (letra === "A") {numeroDoVogais += 1}
  if (letra === "E") {numeroDoVogais += 1}
  if (letra === "I") {numeroDoVogais += 1}
  if (letra === "O") {numeroDoVogais += 1}
  if (letra === "U") {numeroDoVogais += 1}
}
console.log(numeroDoVogais);