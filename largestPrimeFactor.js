exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  let numArr = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      numArr.push(i);
      n /= i;
    }
  }
  let highNum = numArr[numArr.length - 1];
  primeNumber = highNum;

  return primeNumber;
};
