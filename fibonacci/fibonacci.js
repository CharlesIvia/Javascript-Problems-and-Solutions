//Using a for loop

const { Hash } = require("crypto");

const fibonacci = function (count) {
  if (count < 0) return "OOPS";
  if (count == 0) return 0;

  let a = 0;
  let b = 1;

  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b;
};


//Using while loop

const fibonacciTwo = function (num) {
  let a = 1,
    b = 0;
  temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

//Using recursion

function fibonacciThree(num) {
  if (num <= 1) return 1;

  return fibonacciThree(num - 1) + fibonacciThree(num - 2);
}

//Optimized recursion

function fibonacciFour(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] =
    fibonacciFour(num - 1, memo) + fibonacciFour(num - 2, memo));
}
