let number = parseInt(prompt("Enter a number to find a FizzBuzz", 30));

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
