//javascript program to check if a number is a prime number or not.
let number = Math.floor(Math.random() * (1000-10)) + 10;
console.log(number);
let flag = true;

for(let i=2; i<number; i++){
    if(number%i == 0){
        flag = false;
        break;
    }
}

if(flag){
    console.log(number + " is a prime number.");
}
else {
    console.log(number + " is not a prime number.");
}
