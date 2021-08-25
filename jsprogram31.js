//javascript program to count the number of occurrences of vowels in a string.
let string = "peter parker here to pick up a passport please";
let vowels = 0;
let cons = 0;

for(let i=0; i<=string.length; i++){
    if(string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u'){
        vowels++;
    }
    else if(string.charAt(i)>='a' && string.charAt(i)<='z'){
        cons++;
    }
}

console.log(vowels);
console.log(cons);