function getSum1(n) {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    return sum;
  }
  
getSum1(1000) // 4.944999993313104 ms

  function getSum2(n) {
    return (n * (n + 1)) / 2;
  }

getSum2(1000) //0.050000002374872565 ms.