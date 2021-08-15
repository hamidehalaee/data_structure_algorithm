const colors = require('../../console.colorizing')

console.time(colors.FgGreen, 'test');

function globalLinearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            results.push(i)
        }
    }
    // If results array is empty, return -1
    if(!results){
        return -1
    }

    return results
}

let arr = [1, 3, 5, 7, 8, 9];//13.383ms
const oneMillionItems = require('./../sort/create')//133.31ms
let x = 912843573948294367;
 if(globalLinearSearch(oneMillionItems,x)){
     console.log('find')
 }else{
     console.log('not find')
 }
console.timeEnd(colors.FgGreen, 'test')

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}