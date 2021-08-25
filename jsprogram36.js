//javascript program to merge two objects.
const spiderman = {
    firstname : "peter",
    lastname : "parker",
    age : 19
}
const ironman = {
    firstname : "anthony",
    lastname : "stark",
    age : 52,
    gender : "male"
}

/*//first method
const mergedObjects = Object.assign(spiderman, ironman);
console.log(mergedObjects);*/

//second method
const mergedObjects = {...spiderman, ...ironman};
console.log(mergedObjects);