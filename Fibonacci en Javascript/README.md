Cálculo eficiente de la sucesión de Fibonacci en JavaScript
En este repositorio, exploramos diferentes formas de calcular la sucesión de Fibonacci en JavaScript, centrándonos en optimizar el rendimiento del algoritmo.

Solución recursiva
La solución recursiva es la forma más intuitiva de calcular la sucesión de Fibonacci, pero no es la más eficiente en términos de optimización. Aquí está el código de la solución recursiva:

const fibonacciRecursive = n => {
    if (n <= 1) {
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
Solución iterativa
Para mejorar la eficiencia, podemos usar una solución iterativa que utiliza un bucle para calcular los números de Fibonacci. Aquí está el código de la solución iterativa:
const fibonacciIterative = n => {
    const fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}
