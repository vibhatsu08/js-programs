//javascript program to return the sum of natural numbers using recursion.
function myFunction(num){
    if(num > 0){
        return num + myFunction(num - 1);
    }
    else{
        return num;
    }
}
const number = Math.floor(Math.random() * 100);
const result = myFunction(number);
console.log(result);