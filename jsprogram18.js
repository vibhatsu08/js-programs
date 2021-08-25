//javascript program to find the sum of natural numbers.
let number = Math.floor(Math.random() * 100);
let sum = 0;
console.log(number);

for(let i=0; i<=number; i++){
    sum += i;
}
console.log(sum);