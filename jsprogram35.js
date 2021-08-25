//javascript program to loop through an object.
const person = {
    firstname : "peter",
    lastname : "parker",
    age : 19,
    greeting : function(){
        console.log("hello, world!");
    }
}

for(let key in person){
    let value;

    value = person[key];
    console.log(value);
}