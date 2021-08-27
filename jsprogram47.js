//javascript program to remove duplicate elements from an array.
//using the indexOf() and the push() method
function duplicateElement(arr){
    arr.sort();
    let newArr = [];
    for(let i of arr){
        if(newArr.indexOf(i)===-1){
            newArr.push(i);
        }
    }
    console.log(newArr);
}
const array = [2,4,3,6,3,2,4];
duplicateElement(array);