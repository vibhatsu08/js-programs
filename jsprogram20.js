//javascript program to print the factors of a number.
let number = Math.floor(Math.random() * 100);
for(let i=number; i>=1; i--){
    if(number%i == 0){
        console.log(i);
    }
}