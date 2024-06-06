// Agrupar datos de u array e un objeto segun su clave (ES2024)

// ANtiguo metodo
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let  group = {
    par: [],
    impar: []
}
numbers.forEach(number => {
    let key = 'par'
    if( number % 2 === 0 ) {
        key = 'impar'
    }
    group[key].push(number)
})
console.log(group)


// Nuevo metodo //
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Object.groupBy(numbers2, number => {
    if( number % 2 === 0 ) return 'par' 
    return 'impar'
}) 



const avengersTeam = [
    {
        name: 'Tony Stark',
        alias: 'Iron Man',
        powers: ['Inteligencia', 'Tecnología avanzada', 'Traje de combate'],
        planet: 'Tierra',
        specialty: 'Ingeniería y Tecnología',
        movies: ['Iron Man', 'The Avengers', 'Avengers: Endgame', 'etc.']
    },
    {
        name: 'Steve Rogers',
        alias: 'Captain America',
        powers: ['Fuerza sobrehumana', 'Agilidad', 'Escudo indestructible'],
        planet: 'Tierra',
        specialty: 'Liderazgo y Estrategia',
        movies: ['Captain America: The First Avenger', 'The Avengers', 'Avengers: Endgame', 'etc.']
    },
    {
        name: 'Thor Odinson',
        alias: 'Thor',
        powers: ['Dios del Trueno', 'Martillo Mjolnir', 'Control del clima'],
        planet: 'Asgard',
        specialty: 'Combate y Realeza',
        movies: ['Thor', 'The Avengers', 'Thor: Ragnarok', 'etc.']
    },
    {
        name: 'Bruce Banner',
        alias: 'Hulk',
        powers: ['Fuerza extrema', 'Regeneración', 'Resistencia'],
        planet: 'Tierra',
        specialty: 'Física y Ciencia',
        movies: ['The Incredible Hulk', 'The Avengers', 'Avengers: Age of Ultron', 'etc.']
    },
    {
        name: 'Natasha Romanoff',
        alias: 'Black Widow',
        powers: ['Espionaje', 'Combate cuerpo a cuerpo', 'Agilidad'],
        planet: 'Tierra',
        specialty: 'Espionaje y Lucha',
        movies: ['Iron Man 2', 'The Avengers', 'Avengers: Endgame', 'etc.']
    },
    {
        name: 'Clint Barton',
        alias: 'Hawkeye',
        powers: ['Tiro con arco', 'Combate cuerpo a cuerpo', 'Precisión'],
        planet: 'Tierra',
        specialty: 'Arquería y Combate',
        movies: ['Thor', 'The Avengers', 'Avengers: Age of Ultron', 'etc.']
    }
];

Object.groupBy(avengersTeam, hero => hero.name)