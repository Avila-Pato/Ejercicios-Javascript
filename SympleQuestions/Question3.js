let a = [1,2 ,3]
let b = [...a]
b.push(4)
console.log(a) 

// let b = [...a];

// El operador de propagación ...a crea una copia superficial del array a y la asigna a b. Esto significa que b será un nuevo array con los mismos elementos que a, pero b es independiente de a.

//b.push(4);

// Aquí se agrega el número 4 al final del array b. Ahora b es [1, 2, 3, 4]

// Dado que b es una copia independiente de a, el array a no se ve afectado por los cambios realizados en b. Por lo tanto, a sigue siendo [1, 2, 3].