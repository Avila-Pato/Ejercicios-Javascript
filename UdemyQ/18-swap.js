

let x = 10;
let y = 20;

function swap(x, y) {
  // Destructuring assignment to swap values
  [x, y] = [y, x];
}
// Llamar a la función swap con x and y
swap(y, x);
// Imprimir los valores (salida correcta: 20, 10)
console.log(y, x);
  
////////////
let a = 5;
let b = 2;
function swap(a,b) {
  return [b, a]
}
[a, b]= swap(a,b)
console.log(a, b)
