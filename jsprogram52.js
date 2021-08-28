//javascript program to get a random element from a given array.
function getRandomElement(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomElement = arr[randomIndex];
    return randomElement;
}
const array = ["tonsberg", "thor", "midgard", 19, "spiderman", "scarlet witch", "x-men"];
console.log(getRandomElement(array));