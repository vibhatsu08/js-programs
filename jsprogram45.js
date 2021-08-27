//javascript program to insert an element at any index in the array.
//using the splice method
function insertElement(){
    let array = [1, 2, 3, 4, 5];
    let index = 3;
    let element = 8;

    array.splice(index, 0, element);
    console.log(array);
}

insertElement();

//using the for loop
function insertElement1(){
    let arr = [1,2,3,4,5];
    let index = 3;
    let element = 8;

    for(let i=arr.length; i>index; i--){
        arr[i] = arr[i-1];
    }
    arr[index] = element
    console.log(arr);
}
insertElement1();
