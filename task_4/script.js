// with For
console.log("Numbers between 100 and 100,000 that are divisible by 123 :");
for (let i = 100; i <= 100000; i++) {
    if (i % 123 === 0) { 
        console.log(i); 
    }
}


// with While
console.log("Numbers between 100 and 100,000 that are divisible by 123 ::");
let i = 100; 
while (i <= 100000) {
    if (i % 123 === 0) { 
        console.log(i); 
    i++; 
}