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
