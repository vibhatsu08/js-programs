//javascript program to convert objects into strings.
//first method, to convert the object to string using JSON.stringify() method
const person = {
    firstname: "peter",
    lastname: "parker",
    age: "19"
}

const result = JSON.stringify(person);
console.log(result);
console.log(typeof(result));

//second method to convert the object to string using the String() method
const stringResult = String(person);
console.log(stringResult);
console.log(typeof stringResult);