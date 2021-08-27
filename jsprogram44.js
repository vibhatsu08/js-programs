//javascript program to check whether an array is an object
function checkObject(){
    const result = Array.isArray(arr);
    if(result){
        console.log(arr + " is an array! ");
    }
    else{
        console.log(arr + " is not an array! ");
    }
}

const arr = [1, 2, 3, 4, 5];
checkObject(arr);