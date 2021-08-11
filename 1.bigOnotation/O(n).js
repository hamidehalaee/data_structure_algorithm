const colors = require('../console.colorizing')

console.time(colors.FgGreen, 'test');

//O(n)

// All kind of loops
//for loop
// Array.map
// Array.forEach
// Array.indexOf
// ...etc
let array = [1,2,3,4]
for(let i = 0 ; i < array.length; i++) console.log(colors.cyan,array[i]) 

console.timeEnd(colors.FgGreen, 'test') //15.561ms

