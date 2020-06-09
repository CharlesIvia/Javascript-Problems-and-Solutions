//1. Using  a while loop

let repeatStringNTimes = (string, times) => {
  let repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }

  return repeatedString;
};

console.log(repeatStringNTimes("chuck", 3));

//2. Usinf ES6 repeat method

let repeatStringNumTimes = (string, times) => {
  return times > 0 ? string.repeat(times) : "";
};

console.log(repeatStringNumTimes("Rhodes", 4));
