//javascript program to check if a number is odd or even.
let number = Math.floor(Math.random() * (100 - 0)) + 0;
console.log(number);
if(number%2 == 0){
    console.log("even number");
}
else if(number%2 != 0){
    console.log("odd number");
}
else if(number == 0){
    console.log("zero");
}