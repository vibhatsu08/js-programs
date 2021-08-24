//javascript program to check if a number is positive negative or zero.
let number = Math.floor(Math.random() * (100 - (-100)) + -100);
console.log(number);
if(number == 0){
    console.log("zero");
}
else if(number > 0){
    console.log("positive number");
}
else if(number < 0){
    console.log("negative number");
}