
"Prueba de habilidades en JavaScript: Operación de unión interna y manejo de estructuras de datos"
El propósito de este código en el contexto de una prueba técnica de JavaScript podría ser evaluar varias habilidades y competencias del candidato, incluyendo:

Comprensión de la lógica de programación: La prueba evalúa si el candidato puede comprender y escribir un algoritmo para realizar una operación de unión interna entre dos conjuntos de datos basándose en una clave común.
Habilidad para trabajar con objetos y arreglos: Al manipular y combinar datos almacenados en forma de objetos y arreglos, la prueba verifica la capacidad del candidato para trabajar con estructuras de datos complejas en JavaScript.
Conocimiento de funciones de JavaScript: La función innerJoin es un ejemplo de una función que toma parámetros y realiza un procesamiento sobre ellos. La prueba evalúa si el candidato puede crear y usar funciones en JavaScript de manera efectiva.
Capacidad para realizar pruebas unitarias: La aserción al final del código es una forma de prueba unitaria para verificar si la función innerJoin produce el resultado esperado. Esto muestra si el candidato comprende la importancia de las pruebas y puede implementarlas correctamente.
Entendimiento de módulos y manejo de excepciones: El código utiliza el módulo assert de Node.js para realizar una aserción e imprimir resultados en la consola. Esto evalúa si el candidato comprende cómo usar módulos en JavaScript y manejar excepciones adecuadamente.
En resumen, el propósito de este código en una prueba técnica de JavaScript es evaluar la comprensión y las habilidades del candidato en varios aspectos clave de la programación en JavaScript, incluyendo lógica, manipulación de datos, funciones, pruebas y manejo de módulos.


Operación de Unión Interna en JavaScript
Este código demuestra cómo realizar una operación de unión interna (inner join) entre dos conjuntos de datos en JavaScript. La unión interna combina elementos de dos conjuntos de datos basándose en una clave común.
const a = [
    {id : 0, name : 'Jhon'},
    {id : 1, name : 'Justin'}
];

const b = [
    {id : 0, email : 'p.avilaf@gmail.com'},
    {id : 2, email : 'alpha@gmail.com' }
];

const result = innerJoin({leftArray: a, rightArray: b, key: 'id'});
console.log(result);

Resultado Esperado

[
    {id : 0, name : 'Jhon', email : 'p.avilaf@gmail.com'}
]

Función de Unión Interna

function innerJoin({leftArray, rightArray, key}) {
    const map = new Map();
    leftArray.forEach(item => map.set(item[key], item));

    const join = [];
    rightArray.forEach(rightItem => {
        const leftItem = map.get(rightItem[key]);
        if (leftItem !== undefined) {
            join.push({
                ...leftItem,
                ...rightItem
            });
        }
    });
    return join;
}

Este código es útil para combinar conjuntos de datos en JavaScript y puede ser utilizado en aplicaciones donde se necesite realizar operaciones de combinación de datos basadas en claves comunes.
