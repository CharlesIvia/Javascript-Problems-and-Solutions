// 1. Using a loop

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString("Hello"));

// 2. Using Recursion

function reverseStringOne(str) {
  return str === "" ? "" : reverseStringOne(str.substr(1)) + str.charAt(0);
}

console.log(reverseStringOne("Charles"));

//3.Using built-in functions

function reverseStringThree(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStringThree("Yeezy"));
