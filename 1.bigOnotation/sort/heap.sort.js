
const colors = require('../../console.colorizing')

console.time(colors.FgGreen, 'test');

var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}

let myArr = [1,3,2,5,9,8,5,2]//20.7ms
var foo = Array.from(Array(Math.floor(Math.random() * 10000000)).keys())//4.343s
const a = require('./create')//1.022s
heapSort(a);

// console.log(myArr);

console.timeEnd(colors.FgGreen, 'test')