function findFirstRepeated(gifts) {
    const objeto = {}

    for (const value of gifts) {
        objeto[value] = objeto[value] || []
        objeto[value].push(value)

        if (objeto[value].length === 2) {
            return value
        }
    }
    return 'No se repite ningún número'
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(`Se repite el número ${firstRepeatedId}`) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // No se repite ningún número
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(` Se repite el siguiente numero  ${firstRepeatedId3}`) // 5
