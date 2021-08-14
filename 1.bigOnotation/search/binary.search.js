const colors = require('../../console.colorizing')

console.time(colors.FgGreen, 'test');
let recursiveFunction = function (arr, x, start, end) {
      
    // Base Condition
    if (start > end) return false;
  
    // Find the middle index
    let mid=Math.floor((start + end)/2);
  
    // Compare mid with given key x
    if (arr[mid]===x) return true;
         
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else
 
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}
  
// Driver code
let arr = [1, 3, 5, 7, 8, 9];//13.383ms
// const oneMillionItems = require('./../sort/create')//133.31ms
let x = 223;
  
if (recursiveFunction(arr, x, 0, arr.length-1)){
    console.log('find')
}else{
    console.log('not found')
}

console.timeEnd(colors.FgGreen, 'test')

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}

// oneMillionItems => {
//     rss 53.84 MB
//     heapTotal 51.91 MB
//     heapUsed 34.07 MB
//     external 1.02 MB
//     arrayBuffers 0.01 MB
// }

// arr =>{
//     rss 18.79 MB
//     heapTotal 4.77 MB
//     heapUsed 3.06 MB
//     external 1.03 MB
//     arrayBuffers 0.01 MB
// }