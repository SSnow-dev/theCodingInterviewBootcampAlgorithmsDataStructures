const test = "Hello World!";

console.log(reverse(test));
console.log(reverse2(test));

function reverse(string) {
  return string.split('').reverse().join('');
}

function reverse2(string) {
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i-- ) {
    reverse += string[i];
  }
  return reverse;
}