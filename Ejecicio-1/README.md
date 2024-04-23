# Ejercicio nivel facil ###(Comentado ) ###

## Function FindFirstRepeated(gifts)
* se crea la funcion FindFirstRepeated(gifts) con el arreglo(gifts)
## const objeto = {};
* se crea un objeto vacio llamado objeto que se usa para mantener registros de los valores y ocurrencias
## for (const value of gifts) {...}
* inicia un ciclo (for..of) que recorre cada elemento del arreglo gifts en cada iteracion, value tomara el valor del elemento actual del arreglo
## objeto [value]=objeto[value] || [];
*objeto[value] <=  intenta acceder a la funcion value 
*=objeto[value] || [] <=se utiliza el operador logico ('||') OR, entonces si objeto(value) es "undefined". "null" devuele el 2 operando que es el array vacio ('[]')
## objeto[value].push(value);
*objeto[value] <= esto accede a la funcion value dentro del objeto
## .push.(value)
*nos dara un registro de cuantas veces aparece cada valor en el arreglo gifts
## if(objeto[value].length === 2 )
*objeto[value].length === 2 
*verifica si el array asociado a la clase 'value' se ha repetido 2 veces en el arreglo 'gifts', si la condicioj cumple es decir si objeto(value).length === 2 la funcion FindFirstRepeated devuelve ese valor 'value a un return e indicara que se ha encontrado el primer valor que se repite'
*si no se encuentra ningun valor que se repita por 2 vez despues de recorer el arreglo gifts la funcion return -1 indicara que no se ha encontrado nada..
