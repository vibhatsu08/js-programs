//javascript program to generate a random number.
let higher_number = 20;
let lower_number = 10;

let random_number = Math.floor(Math.random() * (higher_number - lower_number) + lower_number);
console.log(random_number);