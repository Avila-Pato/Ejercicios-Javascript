// Problema 1
// crea on objeto con un 'hello' metodo que escriba 'Hello <n> en la consola??

const p = {
    name: 'Patricio',
    hello: () => console.log(`Hello ${p.name}`)
}
p.hello()

//Como harias que el nombre fuera inmutable ?

Object.freeze(p)
p.name = 'Juan'
p.hello()
p.name = 'leonar'
p.hello()



// escribe una funcion que muestre las 5 ciudades que mas se repiten en el siguiente array

const ListCity = [
     "Los Ángeles", "Chicago", "Houston", "Phoenix",
    "Filadelfia", "San Antonio", "San Diego", "Dallas", "San José",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "San Francisco",
    "Charlotte", "Indianápolis", "Seattle", "Denver", "Washington",
    "Boston", "El Paso", "Detroit", "Nashville", "Portland",
    "Memphis", "Oklahoma City", "Las Vegas", "Louisville", "Baltimore",
    , "San Francisco","Sacramento","Sacramento",, "Miami",, "Miami",, "Miami",
    "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento",
    "Mesa", "Atlanta", "Kansas City", "Colorado Springs", "Miami",
    "Nueva York", "Chicago", "San Francisco", "Los Ángeles", "Houston"
];

function cityRepetead(numCities) {
    const cities = {}
    ListCity.forEach(city => {
        cities[city] = !cities[city] ? 1 :  cities[city] += 1
    })
    return Object.keys(cities)
    .map(city => ({name:city, times: cities[city]}))
    .sort((a,b) => b.times - a.times)
    .slice(0,numCities)
    .map(city => city.name)
}
console.log(cityRepetead(5));


