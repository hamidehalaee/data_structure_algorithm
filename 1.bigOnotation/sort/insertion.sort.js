
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
    // console.log(inputArr)
    return inputArr;
};
let myArr = [1,3,2,5,9,8,5,2]//18.313ms
// var foo = Array.from(Array(Math.floor(Math.random() * 10000000)).keys())  //886.507ms
// var _ = require('underscore');
// const start = 1, end = 10000000, step = 2;
// const foo = _.range(start, end, step);//132.237ms
const a = require('./create')//20,000S
insertionSort(a)

console.timeEnd(colors.FgGreen, 'test') 