// calculate the factorial of the largest number in the array
const numbers = [5, 2, 8, 4, 3];

const largestFactorial = numbers.reduce((largest, num) => {
    const currentFactorial = Array
    .from({ length: num })
    .map((_, i) => i + 1)
    .reduce((fact, val) => fact * val, 1);

    return currentFactorial > largest ? currentFactorial : largest;
}, 1);

console.log(largestFactorial); 