//javascript program to compare the elements of two arrays.
/*//using the JSON.stringify() method
function compareElements(arr1, arr2){
    const result = JSON.stringify(arr1) == JSON.stringify(arr2);
    if(result){
        console.log("same elements");
    }
    else{
        console.log("different elements");
    }
}

const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];
compareElements(array1, array2);*/

//by using the for loop
function compareArrays1(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    else{
        let result = false;

        for(let i=0; i<arr1.length; i++){
            if(arr1[i] != arr2[i]){
                return false;
            }
            else{
                return true;
            }
        }
        return result;
    }
}
const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];
const result = compareArrays1(array1, array2);
if(result){
    console.log("same elements");
}
else{
    console.log("different elements");
}