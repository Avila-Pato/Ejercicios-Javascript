// malo
const Object = new Object();  // No es correcto porque sobreescribe el constructor Object
const Array = new Array();    // No es correcto porque sobreescribe el constructor Array

// bueno
const object = {};  // Inicializa un objeto vacío correctamente
const array = [];   // Inicializa un arreglo vacío correctamente

// Malo: para crear variables no usar var
var name = 'Pato';
if (name === 'Pato') {
    var name = 'Pepe';
}

console.log(name); // 'Pepe'

// Bueno: usar let y const
const nameConst = 'Isaias';
if (nameConst === 'Isaias') {
    const nameConst = 'Pepe';
    console.log(nameConst); // 'Pepe' dentro del bloque if
}

console.log(nameConst); // 'Isaias' fuera del bloque if


// Ejemplo de mala práctica: Función impura que depende de variables globales

// Lista de palabras vacías
const STOP_WORDS = ['a', 'and', 'or', 'the'];

// Variable de búsqueda de ejemplo
let inputSearch = 'The new iPhone was sold out';


// Función impura: No recibe parámetros y depende de variables externas
const slugigly = () => inputSearch
    .split(' ')                     // Divide la cadena en palabras
    .map(n => n.toLowerCase())      // Convierte cada palabra a minúsculas
    .filter(n => !STOP_WORDS.includes(n)) // Filtra las palabras vacías
    .join('-');                     // Une las palabras con guiones

console.log(slugigly());  // Salida: "new-iphone-was-sold-out"



// Ejemplo de buena práctica: Función pura pasando parámetros

// Función pura: Recibe parámetros y no depende de variables externas
const Slugigly = ({ input, stopWords }) => {
    return input
        .split(' ')                     // Divide la cadena en palabras
        .map(word => word.toLowerCase()) // Convierte cada palabra a minúsculas
        .filter(word => !stopWords.includes(word)) // Filtra las palabras vacías
        .join('-');                     // Une las palabras con guiones
};

// Ejemplo de uso de la función pura
const slug = Slugigly({ input: inputSearch, stopWords: STOP_WORDS });
console.log(slug);  // Salida: "new-iphone-was-sold-out"

// Mala practica: la variable a es la edad, revisamos que sea mayor de 18 si es mayor de 18 entonces entramos en el {}
if (a > 18) {}
// Bueno practica: Para dar contexto como funciona ? 

if (age > 18) {}

//Mala practica: a la hiora de hacer conversion de tipos evitar estos operadores no queda claros

const number = 0
const string = '7'

!!number;
+string;
number + '';

// Buena practica: es mejor usar el tipo de dato
Boolean(number); // false
Number(string); // 7
String(number); // '0'

// Ejemplo de mala práctica: Usar if innecesario para devolver un booleano
const isPositiveEven = (num) => {
    if (num > 0 && num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// Ejemplo de uso
console.log(isPositiveEven(4));  // Salida: true
console.log(isPositiveEven(-2)); // Salida: false

// Ejemplo de buena práctica: Devolver la condición directamente
const isPositiveEvenBetter = (num) => {
    return num > 0 && num % 2 === 0;
};

// Ejemplo de uso
console.log(isPositiveEvenBetter(4));  // Salida: true
console.log(isPositiveEvenBetter(-2)); // Salida: false

//Mala practica: Evitar usar utilzar string y numeros magicos que no se sabe de donde vienen

if (age > 18) {
    const isPatoConf = confId === 1
    return productType === 'asjjas'
}
// Buena practica: Aunque quede mas largo esmucho mas claro(clean code)
const AGE_AFULTTHOOD = 18
const PATO_CONF_ID =1 
const SOFTWARE_KEY_TYPE_ID = 'asjjas'

if (age > AGE_AFULTTHOOD) {
    const isPatoConf = confId === PATO_CONF_ID
    return productType === SOFTWARE_KEY_TYPE_ID
}