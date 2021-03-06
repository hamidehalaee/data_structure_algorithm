// Constant Space Complexity O(1)
// 1.Booleans
// 2.numbers
// 3.undefined
// 4.null

const colors = require('../console.colorizing')
console.time(colors.FgGreen, 'test');
function arrSum(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  let myArr = [1,2,3,4]
  arrSum(myArr)
  console.timeEnd(colors.FgGreen, 'test') //0.28ms

  // Spaces taken are:
  //   1 number => let sum = 0.
  //   1 number => let i = 0.
  //   So the equation will be O = 1 + 1 so its O(1).

