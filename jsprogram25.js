//javascript program to check if a given string is palindrome or not.
//first method
let string = "tenet";

function reverseString(str){
    const arrValues = str.split('');
    console.log(arrValues);
    const reverseArrValues = arrValues.reverse();
    console.log(reverseArrValues);
    const arrToString = reverseArrValues.join('');
    console.log(arrToString);

    if(str == arrToString){
        console.log("given string is a palindrome string.");
    }
    else{
        console.log("given string is not a palindrome string.");
    }
}

console.log(reverseString(string));