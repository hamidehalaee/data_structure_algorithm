// var foo = Array.from(Array(Math.floor(Math.random() * 10000000)).keys())
// console.log(foo)

for (var a=[],i=0;i<1000000;++i) a[i]=i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

a = shuffle(a);

// console.log(a)

module.exports = a;