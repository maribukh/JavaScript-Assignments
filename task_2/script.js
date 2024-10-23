const number1 = +prompt('Enter first number')
const number2 = +prompt('Enter second number')
const number3 = +prompt('Enter third number') // ველში უნდა შევიყვანოთ სამი რიცხვი

if (number1 % 2 === 0 || number1 % 3 === 0 ||  // რიცხვი უნდა იყოს 2-ის ან 3-ის ჯერადი (უნაშთოდ)
    number1 % 2 === 0 || number1 % 3 === 0 ||
    number1 % 2 === 0 || number1 % 3 === 0) {
    console.log('At least one of the numbers is divisible by 2 or 3.'); 
}

else {
    console.log('None of the numbers are divisible by 2 or 3.'); 
}
