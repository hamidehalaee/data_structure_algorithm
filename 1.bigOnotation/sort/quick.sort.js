
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

var myArray = [1,3,2,5,9,8,5,2]
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);


console.timeEnd(colors.FgGreen, 'test') //14.29ms