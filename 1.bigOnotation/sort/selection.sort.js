
const colors = require('../../console.colorizing')

console.time(colors.FgGreen, 'test');

function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

let myArr = [1,3,2,5,9,8,5,2]//136.963ms
const oneMillionItems = require('./create')//18:25.233 (m:ss.mmm)
selectionSort(oneMillionItems)

console.timeEnd(colors.FgGreen, 'test') 

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}

// myArr memoryUsage =>{
//     rss 53.72 MB
//     heapTotal 51.41 MB
//     heapUsed 34.07 MB
//     external 1.02 MB
//     arrayBuffers 0.01 MB
// }

//one millionItems =>{
//     rss 53.47 MB
//     heapTotal 51.41 MB
//     heapUsed 34.02 MB
//     external 1.02 MB
//     arrayBuffers 0.01 MB
// }