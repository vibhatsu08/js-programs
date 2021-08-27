//javascript prgroam to remove a specified item from an array.
function removeItems(arr, n){
    const newArray = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== n){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

const result = removeItems([1, 2, 3, 4, 5], 2);
console.log(result);