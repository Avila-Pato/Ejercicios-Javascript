let sum = true + true + true * 3
console.log(sum)

// En JavaScript, los valores booleanos true y false se convierten a números en las operaciones aritméticas. true se convierte a 1 y false se convierte a 0.

// Conversiones booleanas a números: En primer lugar, los valores booleanos se convierten a sus equivalentes numéricos:

// 1 + 1 + 1 * 3

// Precedencia de operadores: A continuación, se aplican las reglas de precedencia de operadores. La multiplicación tiene una precedencia más alta que la suma, por lo que se evalúa primero:

// 1 + 1 + (1 * 3)


// Por lo tanto, el resultado de let sum = true + true + true * 3 es 5.