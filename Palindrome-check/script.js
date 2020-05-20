//1. Using built in function

function isPalindrome(str) {
  return (
    str.replace(/[\w_]/g, "").toLowerCase() ===
    str.replace(/[\w_]/g, "").toLowerCase().split("").reverse().join("")
  );
}

console.log(isPalindrome("WAS IT A CAR OR A CAT I SAW"));

//Using a loop and some regex

function isPalindromeOne(str) {
  let regex = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(regex, "");
  let len = str.length;

  for (let i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindromeOne("mom"));
