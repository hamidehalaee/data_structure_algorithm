
const colors = require('../../console.colorizing')

console.time(colors.FgGreen, 'test');

const oneMillionItems = require('./create')//1.287s

oneMillionItems.sort()

console.timeEnd(colors.FgGreen, 'test')

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}
// rss 69.21 MB
// heapTotal 66.7 MB
// heapUsed 49.59 MB
// external 1.02 MB
// arrayBuffers 0.01 MB