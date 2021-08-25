//javascript program to check if two numbers have the same last digit.
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
console.log(num1);
console.log(num2);

if(num1%10 == num2%10){
    console.log("both the numbers have the same last digit.");
}
else{
    console.log("both the numbers don't have the same last digits.");
}