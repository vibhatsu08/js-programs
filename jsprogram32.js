//javascript program to delete a property.
const person = {
    firstname : "peter",
    lastname : "parker",
    age : 19,
    superhero : "spiderman",
    greet : function(){
        console.log("peter parker here to pick up a passport please!");
    },
    score: {
        math : 19,
        science : 20
    }
}
console.log(person);

delete person.score;
delete person['greet'];
console.log(person);

