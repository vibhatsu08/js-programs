//javascript program to print the fibonacci sequence using recursion
function printFib(num){
    if(num > 2){
        return printFib(num - 1) + printFib(num - 2);
    }
    else{
        return num;
    }
}

let number = Math.floor(Math.random() * 20);
for(let i=0; i<number; i++){
    console.log(printFib(i));
}