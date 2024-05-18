/*
Dado un array de numeros enteros devuelve la suma grande entre numeros adyacentes*/

const array = [2,4,1,5,6,3]

function maxAdjacentSum(array){
    let maxSum = -Infinity
    const { length } = array

    for (let i= 0; i < length -1; i++){
        const sum = array[i] + array[i+1]
        if (sum > maxSum){
            maxSum = sum
        }
    }
    return maxSum
}
// Si dicen que lo hagas sin utilizar un if cambiar 
//  if (sum > maxSum){ maxSum = sum} por una asignacion directa 

// maxSum =Math.max(maxSum, sum)