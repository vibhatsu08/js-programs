//javascript program to merge two arrays and remove the duplicate elements of the final array.
function mergeArrays(arr1, arr2){
    let newArr = arr1.concat(arr2);
    newArr.sort();
    console.log(newArr);

    let newNewArr = [];
    for(let i of newArr){
        if(newNewArr.indexOf(i)===-1){
            newNewArr.push(i);
        }
    }
    console.log(newNewArr);
}
const array1 = [1,2,3,4,5,6];
const array2 = [3,4,5,6,7,8];
mergeArrays(array1, array2);
