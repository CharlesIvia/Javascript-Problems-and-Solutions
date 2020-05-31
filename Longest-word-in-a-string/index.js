//Using a for loop
let string = prompt("Enter your string here!");
function findLongestWord(str) {
  let strSplit = str.split(" ");
  let longestWord = "";
  let longestWordLength = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWordLength) {
      longestWordLength = strSplit[i].length;
      longestWord = strSplit[i];
    }
  }
  return longestWord;
}

alert(`The longest word is-  ${findLongestWord(string)}`);
