
const colors = require('../../console.colorizing')

console.time(colors.FgGreen, 'test');
let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    console.log(inputArr)
};
let myArr = [1,3,2,5,9,8,5,2]
insertionSort(myArr)

console.timeEnd(colors.FgGreen, 'test') //18.313ms