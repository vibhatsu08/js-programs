//javascript program to count the number of occurrences in a given string.
let string = "peter parker here to pick up a passport please";
let char = "p";
let count = 0;

for(let i=1; i<=string.length; i++){
    if(string.charAt(i) == char){
        count++;
    }
}
console.log(count);