// Big O is a way of describing the efficiency of 
// algorithms without getting too mired in the details. 
// It describes how the time (or the number of operations needed)
// it takes to run grows as the size of the input grows.
const colors = require('../console.colorizing')

console.time(colors.FgGreen, 'test');

let array = [1,2,3,4]
for(let i = 0 ; i < array.length; i++) console.log(colors.cyan,array[i]) 

console.timeEnd(colors.FgGreen, 'test') //15.561ms

