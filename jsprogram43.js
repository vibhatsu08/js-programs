//javascript program to check if the array has the specified value
let array = [1, 2, 3, 4, 5];
let value1 = 6;
let value2 = 4;

if(array.includes(value1)){
    console.log(value1 + "present at" + array.indexOf(value1));
}
else{
    console.log(value1 + " is not present in the array.");
}
if(array.includes(value2)){
    console.log(value2 + " present at " + array.indexOf(value2));
}
else{
    console.log(value2 + " is not present in the array.");
}