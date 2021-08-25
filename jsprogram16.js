//javascript program to check if a given number is an armstrong number or not.
const number = 92727;
const length = number.length;
let sum = 0;

let temp = number;
while(temp > 0){
    let remainder = temp % 10;
    sum += remainder ** length;
    temp = parseInt(temp / 10);
}

if(sum == number){
    console.log("armstrong number");
}
else {
    console.log("not armstrong number");
}