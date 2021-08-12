
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
const oneMillionItems = require('./create')//20,000S
insertionSort(oneMillionItems)

console.timeEnd(colors.FgGreen, 'test') 

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}