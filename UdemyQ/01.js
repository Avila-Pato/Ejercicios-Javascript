// Objeto Match
let resultados;

resultados = Math.PI;

resultados = Math.ceil(2.1); // ceil redondea 2.1 hacia arriba, el resultado es 3
resultados = Math.floor(2.9); // floor redondea 2.9 hacia abajo, el resultado es 2
resultados = Math.sqrt(144); // sqrt calcula la raíz cuadrada de 144, el resultado es 12
resultados = Math.abs(-200); // abs devuelve el valor absoluto de -200, el resultado es 200
resultados = Math.min(3, 4, 5, 2); // min encuentra el valor mínimo entre los números 3, 4, 5, y 2, el resultado es 2
resultados = Math.max(3, 4, 5, 2); // max encuentra el valor máximo entre los números 3, 4, 5, y 2, el resultado es 5
resultados = Math.random(); // random genera un número aleatorio entre 0 (incluido) y 1 (excluido)
resultados = Math.floor(Math.random() * 30); // random genera un número aleatorio entre 0 y 1, se multiplica por 30 y luego floor redondea hacia abajo, el resultado es un número entero entre 0 y 29


console.log("Valor de Math esperado", resultados);