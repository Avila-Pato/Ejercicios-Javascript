
    // const: Úsalo cuando quieras una variable que no cambiará de valor.
    // Por ejemplo, si tienes un número que siempre será 5, lo declaras con const.

const x = 5;
x = 6; // Error: Asignación a variable constante

const obj = { nombre: "Juan" };
obj.nombre = "Juana"; // Permitido


    // let: Úsalo cuando quieras una variable que pueda cambiar de valor. 
    // Por ejemplo, si estás contando algo y el número puede cambiar, usas let.

let y = 10;
y = 20; // Permitido

// Ejemplo de ámbito de bloque
{
    let y = 30;
    console.log(y); // 30
}

    // var: Es la forma antigua de declarar variables. Puedes usarlo, 
    // pero let y const son más seguros y más fáciles de entender. En la mayoría de los casos, es mejor evitar var.

var z = 15;
z = 25; // Permitido

function ejemplo() {
    var z = 30;
    console.log(z); // 
}

