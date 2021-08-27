//javascript program to empty an array using different methods.
//by using an empty array
function emptyArray(arr){
    arr = [];
    console.log(arr);
}
const array = [1,2,3,4,5];
emptyArray(array);

//by using the splice method
function emptyArray1(arr){
    for(let i=0; i<arr.length; i++){
        arr.splice(0, arr.length);
    }
    console.log(arr);
}
const array1 = [1,2,3,4,5];
emptyArray1(array1);

//by using the length method
function emptyArray2(arr2){
    arr2.length = 0;
    console.log(arr2);
}
const array2 = [1,2,3,4,5];
emptyArray2(array2);