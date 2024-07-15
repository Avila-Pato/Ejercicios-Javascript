//Escribe una función en JavaScript llamada calcularPromedio que tome como parámetro un arreglo de números llamado notas. La función debe calcular y devolver el promedio de las notas en el arreglo. Asegúrate de manejar el caso en que el arreglo esté vacío, devolviendo 0 en ese caso.

//Por ejemplo, si se proporciona el arreglo [8, 7, 6, 9, 8], la función debería devolver el promedio 7.6.

//Escribe el código completo de la función calcularPromedio junto con un ejemplo de uso para verificar su funcionamiento.

function calcularPromedio(notas) {
  // Verificar si el arreglo de notas está vacío
  if (notas.length === 0) {
    return 0.0;
  }

  // Calcular la suma de todas las notas
  let suma = notas.reduce(function (total, nota) {
    return total + nota;
  });

  // Calcular el promedio
  let promedio = suma / notas.length;

  return promedio;
}

// Ejemplo de uso
const notas = []; // Ejemplo de un arreglo de notas
const promedioNotas = calcularPromedio(notas);
console.log("El promedio de notas es: " + promedioNotas.toFixed(1)); // Output: El promedio de notas es: 4.3);
// Deja una buena ejecución! y acorta el numero de la salida(ToFixed)
