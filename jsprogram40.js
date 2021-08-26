//javascript program to check if a string includes a substring or not.
//first method using the .includes() method
let string = "spiderman no way home";
let substring = "no way";

if(string.includes(substring)){
    console.log("the substring is a part of the original string.");
}
else{
    console.log("the substring is not a part of the original string.");
}

//second method by using the indexOf() method
if(string.indexOf(substring) !== -1){
    console.log("the substring is a part of the original string.");
}
else{
    console.log("the substring is not a part of the original string.");
}