//create one million items

for (var oneMillinitems=[],i=0;i<1000000;++i) oneMillinitems[i]=i;
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

oneMillinitems = shuffle(oneMillinitems);

module.exports = oneMillinitems;