
const colors = require('../console.colorizing')


console.time(colors.FgGreen, 'test');

function nestedLoop(n) {
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        console.log(i, j);
      }
    }
  }
nestedLoop(6)


console.timeEnd(colors.FgGreen, 'test')  // 59.449ms