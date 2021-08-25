//javascript program to make a simple calculator
let num1 = Math.floor(Math.random * (100));
let num2 = Math.floor(Math.random * (100));
let operator = '+';
console.log(num1);
console.log(num2);

switch (operator) {
    case '+':
        console.log("num1 + num2: " + (num1 + num2));
        break;

    default:
        console.log("nothing");
        break;
}