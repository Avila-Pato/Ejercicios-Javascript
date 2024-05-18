// La función mergObject combina dos objetos utilizando la sintaxis de propagación (spread syntax) de JavaScript. Esto significa que toma las propiedades de obj1 y obj2 y las fusiona en un nuevo objeto. Si hay propiedades con el mismo nombre en ambos objetos, el valor de la propiedad en el segundo objeto (obj2) sobrescribirá el valor de la propiedad en el primer objeto (obj1).

function mergObject(obj1, obj2) {
    return{...obj1, ...obj2}
}
console.log(mergObject({a: 1, b: 2}, {b: 3, a: 4},))