//javascript program to check for the highest common factor of two given numbers.
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
console.log(num1);
console.log(num2);
let hcf;

for(let i=1; i<=num1 && i<=num2; i++){
    if(num1%i == 0 && num2%i == 0){
        hcf = i
    }
}

console.log(hcf);
