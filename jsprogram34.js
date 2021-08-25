//javascript program to check if a key exists in an object
//using the 'in' operator
const person1 = {
    firstname : "peter",
    lastname : "parker",
    age : "19",
    superhero : "spiderman",
    greeting : function(){
        console.log("peter parker here to pick up a passport please");
    }
}

let hasKey = 'age' in person1;
console.log(hasKey);

//using the 'hasOwnProperty()' method
const person2 = {
    firstname : "peter",
    lastname : "parker",
    age : "19",
    superhero : "spiderman",
    greeting : function(){
        console.log("peter parker here to pick up a passport please");
    }
}

const hasOwnPropertyValue = person2.hasOwnProperty('age');
console.log(hasOwnPropertyValue);