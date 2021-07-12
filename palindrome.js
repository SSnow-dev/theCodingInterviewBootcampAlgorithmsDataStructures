const test = "abba";
const test2 = "abcdefg";

console.log(isPalindrome(test));
console.log(isPalindrome(test2));

function isPalindrome(string) {
  if (string === reverse(string)) {
    return true;
  } else return false;
}

function reverse(string) {
  return string.split('').reverse().join('');
}