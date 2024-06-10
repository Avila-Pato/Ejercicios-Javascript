// proporciona una función que encuentre el número menor y el número mayor en un arreglo dado, y luego devuelve la suma de estos dos números.

// [1, 2, 3, 4, 56, 7, 8, 10]

function sumaMenorMayor(arr) {
    const resultado = arr.reduce((acc, number) => {
      if (acc.max < number) acc.max = number;
      if (acc.min > number) acc.min = number;
      return acc;
    }, { min: Infinity, max: -Infinity });
  
    const suma = resultado.min + resultado.max;
    console.log(
    `El Min es : ${resultado.min}, 
    El Max es : ${resultado.max}, 
    La Suma de estos dos da: ${suma}`);
    
  }
  
  const result = sumaMenorMayor([10, 2, 3, 4, 56, 7, 6, 10]);