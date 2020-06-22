//Using a for loop

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
