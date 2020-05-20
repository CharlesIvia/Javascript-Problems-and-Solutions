//1 Using a while loop

function factorialize(num) {
  let result = num;

  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}

console.log(factorialize(4));

//Using a for loop

function factorializeOne(num) {
    if (num === 0 || num === 1) return 1;

    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

console.log(factorializeOne(4));

//Using recursion

function factorializeTwo(num) {
    if (num < 0) return -1;

    else if (num === 0) return 1;

    else {
        return (num * factorializeTwo(num - 1));
    }
}

console.log(factorializeTwo(4));