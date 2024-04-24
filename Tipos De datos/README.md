# Enumeramos los tipos de datos que hay en JavaScript, incluso los más actuales, para que entiendas las bases de este lenguaje de programación.

### El último estándar ECMAScript define nueve tipos.
```Javascript
Seis tipos de datos primitivos, controlados por el operador typeof:

Undefined: typeof instance === "undefined"
Boolean: typeof instance === "boolean"
Number: typeof instance === "number"
String: typeof instance === "string"
BigInt: typeof instance === "bigint"
Symbol: typeof instance === "symbol"

Null: typeof instance === "object".
Tipo primitivo especial que tiene un uso adicional para su valor: si el objeto no se hereda,
se muestra null;

Object: typeof instance === "object".
Tipo estructural especial que no es de datos pero para cualquier instancia de objeto construido
que también se utiliza como estructuras de datos: new Object, new Array, new Map, new Set,
new WeakMap, new WeakSet, new Date y casi todo lo hecho con la palabra clave new;

Function: una estructura sin datos, aunque también responde al operador typeof:
typeof instance === "function". Esta simplemente es una forma abreviada para funciones,
aunque cada constructor de funciones se deriva del constructor Object.
