// - Tipos primitivos de JavaScript;
// ahi 2 tipos de datos en JavaScript: primitivos y objetos
// sus diferencias son que los primitivos son inmutables y los objetos son mutables
// lo que quire decir que los primitivos no pueden ser modificados y los objetos si
// Tipos primitivos de JavaScript
console.log(typeof undefined) // Output: "undefined"
console.log(typeof true) // Output: "boolean"
console.log(typeof 1) // Output: "number"
console.log(typeof 'Hello') // Output: "string"
console.log(typeof 2n) // Output: "bigint"
console.log(typeof Symbol()) // Output: "symbol"
console.log(typeof null) // Output: "object" (Este es un error conocido en JavaScript)

// Tipos de objetos de JavaScript
console.log(typeof []) // Output: "object"
console.log(typeof {}) // Output: "object"
console.log(typeof new Set()) // Output: "object"
console.log(typeof new Map()) // Output: "object"

// Función
console.log(typeof function () {}) // Output: "function"
