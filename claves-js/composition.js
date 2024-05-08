//function composition 
// capacidad de crear una funcion a base dde funciones diferentes (unirlas)

const addOne = x => x + 1;

const multiply = x => x * 2;

const compose = (f, g) => x => f(g(x));

const composedFunction = compose(addOne, multiply);

console.log(composedFunction(5));

    // En la práctica, esto significa que puedes crear una nueva función que primero aplica una función g al argumento dado, y luego aplica la función f al resultado de g. Esto permite encadenar varias operaciones.

    // El código también define dos funciones simples: addOne, que suma 1 al argumento, y multiply, que multiplica el argumento por 2. Luego, utiliza la función compose para crear una nueva función llamada composedFunction, que es la composición de addOne y multiply.

    // Finalmente, cuando composedFunction se llama con un argumento, primero multiplica ese argumento por 2 y luego le suma 1. Por ejemplo, composedFunction(5) devolverá 11, ya que multiplica 5 por 2 para obtener 10, y luego suma 1 para obtener 11.
const addTwo = x => x + 3;

const restar = x => x - 5;
    
const build = (a, b) => x => a(b(x));
    
const buildFunction = build(addTwo, restar);
    
console.log(buildFunction(15));

    // se definen dos funciones addTwo y restar que realizan operaciones diferentes sobre un argumento x.
    // Luego, la función build toma dos funciones a y b como argumentos y devuelve una nueva función que primero aplica b y luego a al argumento dado. Esencialmente, esta función realiza la composición en el orden inverso.
    // Finalmente, se crea una nueva función llamada buildFunction utilizando la función build con las funciones addTwo y restar.
    // Cuando se llama a buildFunction(15), primero se aplica restar al argumento 15, lo que resulta en 15 menos 5, es decir,
    // 10. Luego, se aplica addTwo al resultado, sumando 3, lo que da como resultado 13.
    // Por lo tanto, console.log(buildFunction(15)) imprimirá 13.