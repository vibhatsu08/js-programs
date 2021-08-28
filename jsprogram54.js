//javascript program to divide an array into smaller chunks.
function smallerChunks(arr, c){
    while(arr.length > 0){
        let tempArray;
        tempArray = arr.splice(0, c);
        console.log(tempArray);
    }
}
const chunk = 1;
const array = [1,2,3,4,5,5,6];
smallerChunks(array, chunk)