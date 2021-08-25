//javascript program to explore new ways to create objects.
/*//using object literal
const person = {
    firstname : "peter",
    lastname : "parker",
    age : 18,
    superhero : 'spiderman',
    hobbies : ['save the world', 'swing around', 'irritate tony stark'],
    greet : function(){
        console.log("peter parker here to pick up a passport please!");
    },
    score : {
        math : 9,
        science : 10,
        sports : 10
    }
};

console.log(typeof person);
console.log(typeof person.firstname);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.superhero);
person.greet();
console.log(person.score.math);*/

//create an object using instance of object directly

const person = new Object({
    firstname : "peter",
    lastname : "parker",
    age : 18,
    superhero : 'spiderman',
    hobbies : ['save the world', 'swing around', 'irritate tony stark'],
    greet : function(){
        console.log("peter parker here to pick up a passport please!");
    },
    score : {
        math : 9,
        science : 10,
        sports : 10
    }
})

console.log(typeof person);
console.log(typeof person.firstname);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.superhero);
person.greet();
console.log(person.score.math);




