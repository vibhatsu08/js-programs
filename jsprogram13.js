//javascript program to print all the prime numbers between two intervals.
let high = 200;
let low = 1;

for(let i=low; i<=high; i++){
    let flag = true;
    for(let j=2; j<i; j++){
        if(i%j == 0){
            flag = false;
            break;
        }
    }

    if(flag){
        console.log(i);
    }
}