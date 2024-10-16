/*
    Title   : Left Rotate Arry By One
    Date    : Oct 15, 2024 (Day3)
    in: 1,2,3,4,5
    out: 2,3,4,5,1
*/
const myArr = [1,2,3,4,5];
let result = console.log(leftRotateArrayByOne(myArr));

function leftRotateArrayByOne(myArr){
    let first = myArr[0];
    let len = myArr.length;
    // myArr.splice(0,1);
    // myArr.push(first);

    for(let i=0; i < len - 1 ; i++){
        myArr[i] = myArr[i + 1];
    }

    // myArr[len - 1] = first;

    return myArr;
}