const colors = require('../../console.colorizing');
const oneMillinitems = require('./create');
console.time(colors.FgGreen, 'test');
function sortItems(array) {
	let swapped = true;
	do {
		swapped = false;
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return array;
}

var myArray = [1,3,2,5,9,8,5,2],//156.418ms
oneMillionItems = require('./create');//a very long time
var sortedList = sortItems(oneMillionItems);
console.log(sortedList);
console.timeEnd(colors.FgGreen, 'test') 

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}

// myArr => {
//     rss 54.05 MB
//     heapTotal 51.91 MB
//     heapUsed 34.11 MB
//     external 1.02 MB
//     arrayBuffers 0.01 MB
// }