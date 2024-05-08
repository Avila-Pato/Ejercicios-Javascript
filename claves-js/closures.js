// con los closures podemos recordar variables de un scope anterior es decir 
// cuando tenemos funciones dentro de esa misma funcion interna.. esta es capaz
// de acceder al valor de la funcion externa 

const outerFunction = () => {
    const value = 10;

    const innerFunction = () => {
        console.log(value)
    };

    innerFunction();
}

console.log(outerFunction());