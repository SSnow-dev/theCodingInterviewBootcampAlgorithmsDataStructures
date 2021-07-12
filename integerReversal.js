
const test = 123;
const test2 = 142362333;

console.log(reverseInt(test));
console.log(reverseInt(test2));
console.log(reverseInt(3));
console.log(reverseInt(31));

function reverseInt(num) {
  return Number(reverse(num.toString()));
}

function reverse(string) {
  return string.split('').reverse().join('');
}