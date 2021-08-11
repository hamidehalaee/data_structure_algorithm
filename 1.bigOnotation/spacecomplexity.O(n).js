// Linear Space Complexity O(n)
// 1.Strings
// 2.Arrays
// 3.Objects

const colors = require('../console.colorizing')
console.time(colors.FgGreen, 'test');
function makeDouble(arr) {
    let myArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      arr.push(2 * arr[i]);
    }
  
    return myArr;
  }

console.timeEnd(colors.FgGreen, 'test')

// Spaces taken are:
// 1 number => let i = 0.
// n number (return myArr) since the returned array depends on the length of the given array.
// So the equation will be O = 1 + n so its O(n).