//javascript program to find the factorial of a number.
let number = Math.floor(Math.random() * 10 - 0);
console.log(number);

let fact = 1;
for(let i=1; i<=number; i++){
    fact *= i;
}
console.log(fact); 