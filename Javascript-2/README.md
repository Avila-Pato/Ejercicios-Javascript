# Prueba de habilidades en JavaScript: Operación de unión interna y manejo de estructuras de datos

### Este código demuestra cómo realizar una operación de unión interna (inner join) entre dos conjuntos de datos en JavaScript. La unión interna combina elementos de dos conjuntos de datos basándose en una clave común.

- Comprensión de la lógica de programación: La prueba evalúa si el candidato puede comprender y escribir un algoritmo para realizar una operación de unión interna entre dos conjuntos de datos basándose en una clave común.
- Habilidad para trabajar con objetos y arreglos: Al manipular y combinar datos almacenados en forma de objetos y arreglos, la prueba verifica la capacidad del candidato para trabajar con estructuras de datos complejas en JavaScript.
- Conocimiento de funciones de JavaScript: La función innerJoin es un ejemplo de una función que toma parámetros y realiza un procesamiento sobre ellos. La prueba evalúa si el candidato puede crear y usar funciones en JavaScript de manera efectiva.
- Capacidad para realizar pruebas unitarias: La aserción al final del código es una forma de prueba unitaria para verificar si la función innerJoin produce el resultado esperado. Esto muestra si el candidato comprende la importancia de las pruebas y puede implementarlas correctamente.
- Entendimiento de módulos y manejo de excepciones: El código utiliza el módulo assert de Node.js para realizar una aserción e imprimir resultados en la consola. Esto evalúa si el candidato comprende cómo usar módulos en JavaScript y manejar excepciones adecuadamente.

~~~ javascript
// Importamos la función de aserción desde el módulo 'assert' de Node.js
import assert from 'node:assert/strict';

// Definimos un arreglo llamado 'directory' que contiene información de personas
const directory = [ 
    {"name": "Maggie", "age": 14, "id": 0, "phone": "+123456"}, 
    {"name": "John", "age": 25, "id": 1, "phone": "+987654"}, 
    {"name": "Alice", "age": 30, "id": 2, "phone": "+135792"}, 
    {"name": "Bob", "age": 18, "id": 3, "phone": "+864209"}, 
    {"name": "Sarah", "age": 40, "id": 4, "phone": "+741852"}, 
    {"name": "David", "age": 22, "id": 5, "phone": "+369258"},
    {"name": "Emily", "age": 19, "id": 6, "phone": "+802467"}, 
    {"name": "Michael", "age": 35, "id": 7, "phone": "+514237"}
];

// Definimos un arreglo llamado 'userRegistrations' que contiene registros de usuarios
const userRegistrations = [
    {"name": "Maggie", "age": 14, "id": 0, "email": "maggie@gmail.com", "confirmed": true}, 
    {"name": "Bob", "age": 18, "id": 1, "email": "Bob@gmail.com", "confirmed": false}, 
    {"name": "Sarah", "age": 40, "id": 2, "email": "Sarah@gmail.com", "confirmed": false}, 
    {"name": "David", "age": 22, "id": 3, "email": "David@gmail.com", "confirmed": true}, 
];

// Definimos un arreglo de ejemplo 'a' que contiene objetos con propiedades 'id' y 'name'
const a = [
    {id : 0, name : 'Jhon'},
    {id : 1, name : 'Justin'}
];

// Definimos un arreglo de ejemplo 'b' que contiene objetos con propiedades 'id' y 'email'
const b = [
    {id : 0, email : 'p.avilaf@gmail.com'},
    {id : 2, email : 'alpha@gmail.com' }
];

// Definimos un arreglo de ejemplo 'expectedOutput' que contiene el resultado esperado de una operación de unión interna
const expectedOutput = [
    {id : 0, name : 'Jhon', email : 'p.avilaf@gmail.com'},
];

// Definimos una función llamada 'innerJoin' que realiza una unión interna entre dos conjuntos de datos basados en una clave común
function innerJoin({leftArray, rightArray, key}) {
    // Creamos un mapa para almacenar los elementos del 'leftArray' basados en la clave especificada
    const map = new Map();
    leftArray.forEach(item => map.set(item[key], item));

    // Creamos un arreglo para almacenar los resultados de la unión interna
    const join = [];
    // Iteramos sobre el 'rightArray' y buscamos elementos correspondientes en el mapa creado anteriormente
    rightArray.forEach(rightItem => {
        const leftItem = map.get(rightItem[key]);
        // Si encontramos un elemento correspondiente, lo agregamos al arreglo de resultados
        if (leftItem !== undefined) {
            join.push({
                ...leftItem,
                ...rightItem
            });
        }
    });
    return join; // Devolvemos el resultado de la unión interna
}

// Imprimimos en consola información sobre los arreglos 'directory' y 'userRegistrations', junto con la clave 'name'
console.log({ leftArray: directory, rightArray: userRegistrations, key: 'name' });

// Llamamos a la función 'innerJoin' con los arreglos 'a' y 'b' y la clave 'id', y almacenamos el resultado en 'result'
const result = innerJoin({leftArray: a, rightArray: b, key: 'id'});

// Realizamos una aserción para verificar si el resultado de la unión interna coincide con 'expectedOutput'
assert.deepStrictEqual(result, expectedOutput);





En este código:

-- directory representa un conjunto de datos de personas.
-- userRegistrations representa un conjunto de registros de usuarios.
-- a y b son arreglos de ejemplo utilizados para probar la función innerJoin.
-- expectedOutput representa el resultado esperado de la unión interna entre los arreglos a y b.
-- innerJoin es una función que realiza una unión interna entre dos conjuntos de datos basados en una clave común.
-- Se imprime en consola la información de directory y userRegistrations, junto con la clave 'name'.
 --Se llama a la función innerJoin con los arreglos a y b, y se verifica si el resultado coincide con expectedOutput.
