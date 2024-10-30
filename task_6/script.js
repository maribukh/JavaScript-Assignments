const isNumberPrime = (number) => {
    const divisors = [];
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

const number = +prompt('Enter number:');
const numberDivisors = isNumberPrime(number);
const sumOfDivisors = numberDivisors.reduce((acc, curr) => acc + curr, 0);

console.log(`${number}: ${numberDivisors.join(', ')}`);
console.log(`${number}: ${sumOfDivisors}`);
