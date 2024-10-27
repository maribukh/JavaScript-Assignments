// // მომხმარებელს შეყავს ორი რიცხვი, თქვენი მიზანია იპოვოთ პირველი რიცხვიდან მეორე რიცხვის
//  ჩათვლით შუალედში მოთავსებული ყველა სრულყოფილი რიცხვი და დაბეჭდოთ კონსოლში.
// // სრულყოფილია რიცხვი რომლის გამოყოფების ჯამი(თავისი თავის გარდა) უდრის ამ რიცხვს. 
// // მაგ.: 6. 6-ს გამყოფები თავისი თავის გარდა არიან 1, 2, 3 -> 1+2+3 = 6

// if you write first number then with 
// first number u can find second numbers variants where will be all equal (not first number)

// I. შეგვყავს ორი რიცხვი
// II. მეორე რიცხვი არის პირველის უნაშთო გამოყოფი
// III. უნდა დაიბეჭდოს ყველა ვარიანტი


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












// const isPrime = (number) => {
//     console.log(a,[b])
// }
// for (let i = a; i >= 0; i = (i % (i % i)), i++ );
//     console.log([a, b])

// const a = +prompt('Enter first number') 

//     for i in range(1, n + 1);
//     result += i

//     console.log('a, n') 

// const a = +prompt('Enter first number');
// let result = 0;
// for (let i in Range(1, n + 1)); {
//     result += i;
// }
// console.log(result);


// const isPerfect = (num) => {
//     let sum = 0;
//     for (let i in Range(1, num + 1)) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === num; 
//       console.log(sum);
// }

// const firstNumber = +prompt('Enter first number:');
// const secondNumber = +prompt('Enter second number:');

// console.log(`${firstNumber} ${secondNumber}:`);
// for (let i = firstNumber; i <= secondNumber; i++) {
//     if (isPerfect(i)) {
//         console.log([]); 
//     }
// }
