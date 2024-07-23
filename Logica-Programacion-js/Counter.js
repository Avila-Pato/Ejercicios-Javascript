// Dado un número entero n, escribe una función createIncrementer que devuelva una función. Esta función devuelta, cuando se llame por primera vez, debe devolver n. En cada llamada subsiguiente, debe devolver en un valor que sea 1

var createIncrementer = function (n) {
  return function () {
    return n++;
  };
};

const counter = createIncrementer(10);
counter(); // 10
counter(); // 11

counter(); // 12
// Utilizar un bucle for para llamar a la función generadora y mostrar los resultados
// Utilizando el bucle for
const incrementer = createIncrementer(5);
for (let i = 0; i < 5; i++) {
  console.log(incrementer());
}
