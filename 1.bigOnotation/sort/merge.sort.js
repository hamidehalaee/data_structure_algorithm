
const colors = require('../../console.colorizing');


console.time(colors.FgGreen, 'test');
function merge(left, right){
    let array = [];
    //break out of loop if any array gets empty
    while (left.length && right.length){
       //Find the smaller among the smallest elements of left and right subarrays
       if (left[0] < right[0]){
          array.push(left.shift());
       }else{
          array.push(right.shift());
       }
    }
    //This is where we are going to concatenate the leftover elements
    return [...array, ...left, ...right];
 }
 
 function merge_sort_algorithm(array){
    const half = array.length /2;
    
    if (array.length < 2){
       return array;
    }
    
    const left = array.splice(0, half);
    return merge(merge_sort_algorithm(left), merge_sort_algorithm(array));
 }
 
let myArr = [1,3,2,5,9,8,5,2] //22.942ms
var foo = Array.from(Array(Math.floor(Math.random() * 10000000)).keys()) //break
const oneMillinitems = require('./create') //1163 S
merge_sort_algorithm(oneMillinitems)

console.timeEnd(colors.FgGreen, 'test')//22.942ms

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}