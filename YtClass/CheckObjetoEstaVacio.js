// determinar si un objeto en JavaScript está vacío, es decir, si no tiene propiedades. Esto puede ser útil en diversas situaciones donde necesites verificar si un objeto contiene datos o no, por ejemplo:

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));       // true
console.log(isEmpty({a: 1}));   // false
