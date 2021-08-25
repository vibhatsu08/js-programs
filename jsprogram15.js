//javascript program to print the fibonacci sequence
let n1 = 0;
let n2 = 1;
let nextTerm;

for(let i=0; i<=10; i++){
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    console.log(nextTerm);
}