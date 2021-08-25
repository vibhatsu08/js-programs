//javascript program to count the number of properties/keys in an objects.
const person = {
    firstname : "peter",
    lastname : "parker",
    age : 19,
    superhero : "spiderman"
}
let numberOfKeys = 0;

for(let key in person){
    numberOfKeys++;
}
console.log(numberOfKeys);

