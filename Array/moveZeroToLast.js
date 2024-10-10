/*
    Title   : Move Zero value in the end. 
    Date    : Oct 09, 2024 (Day3)
*/
let input = [10,20,25,0,30,40,50,0,0];

let result = moveZeroToLast(input);
console.log(result);

function moveZeroToLast(myArr){
    let count = 0;
    let len = myArr.length;

    for(i = 0; i < len; i++){
        if(myArr[i] != 0){
            let temp = myArr[i];
            myArr[i] = myArr[count];
            myArr[count] = temp;
            count++;
        }
    }

    return myArr;
}