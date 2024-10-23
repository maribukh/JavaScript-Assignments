const number = prompt("Please Enter a number (at least 2 digits):");

if (number.length >= 2) {
    const lastDigit = number[number.length - 1]; 
    console.log("Last digit:", lastDigit); 
} else {
    console.log("Please enter at least 2 digits."); 
}
