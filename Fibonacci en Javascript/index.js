// <!-- n = 1 ->
// n = 2 -> 1 + 0
// n = 3 -> 1 + 1
//  -->

// <!-- const fibonacci = n => {
//     if (n <= 1) {
//         return n;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// } -->

const fibonacci = (n) => {
    const fib = [0, 1]

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }

    return fib[n]
}

console.time('fibo')

console.log(2) // 1
console.log(3) // 2
console.log(4) // 3
console.log(5) // 5
console.log(10) // 8
console.log(50) // 12586269025

console.timeEnd('fibo') // 0.000ms
