
const colors = require('../../console.colorizing')



console.time(colors.FgGreen, 'test');

function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [1,3,2,5,9,8,5,2]//14.29ms
var foo = Array.from(Array(Math.floor(Math.random() * 10000000)).keys())//<--- Last few GCs --->
const a = require('./create')//2.901s
quick_Sort(a);
// console.log("Sorted array: " + sortedArray);

console.timeEnd(colors.FgGreen, 'test') 
const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}