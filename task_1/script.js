let year = prompt("შეიყვანეთ წელი:"); 
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) { // თუ მომხმარებელმა შეიყავანა წელი, რომელიც იყოფა 4-ზე და არ იყოფა 100-ზე - არის ნაკიანი)
    console.log(year + " — ეს არის ნაკიანი წელი."); 
} else {
    console.log(year + " — ეს არ არის ნაკიანი წელი.");
} 