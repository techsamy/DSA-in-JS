/*
    Title   : Find Largest Number
    Date    : Oct 15, 2024 (Day4)
*/
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,50,15,16,17,18,19,20,24,60];

let result = console.log(findLargestNumber(arr));

function findLargestNumber(arr){
    let largestNumber = arr[0];
    for (var i = 1; i < arr.length +1; i++){
        if(arr[i] > largestNumber){
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}