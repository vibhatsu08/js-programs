//javascript program to perform intersection between two given arrays.
function getIntersection(arr1, arr2){
    const setA = new Set(arr1);
    const setB = new Set(arr2);
    const intersectionArr = [];

    for(let i of setB){
        if(setA.has(i)){
            intersectionArr.push(i);
        }
    }
    return intersectionArr;
}
const array1 = [1,2,3,5,4];
const array2 = [2,3,4,5,2];
console.log(getIntersection(array1, array2));
