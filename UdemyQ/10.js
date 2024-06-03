// Metodos Para los arrays

const Arreglos = ["Hola", 10, true, "si", null, {nombre: "Patricio", trabajo: 'Programador'}, [1,2,3]];
// Elimina el primer elemento
Arreglos.pop()
// Elimina el ultimo elemento
Arreglos.shift()

// Elimina el elemento en la posicion 2
Arreglos.splice(2,1);

console.log(Arreglos);



let lenguajes = ["JavaScript", "PHP", "Python"];
lenguajes.push("React")
lenguajes.unshift("Angular");
console.table(lenguajes);



// Rest Operator o Spreadr Operator
const nuevoArreglo = ['java', ...lenguajes];
console.log(nuevoArreglo);