console.log(maxChar("aaaabbc"));
console.log(maxChar("aaaabbc 323333333"));


function maxChar(string) {
  const chars = {};
  string.split('').forEach(char => {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char] ++;
    }
  });
  const entries = Object.entries(chars);
  entries.sort((a, b) => b[1] - a[1]);
  return `The most used char is ${entries[0][0]}: used ${entries[0][1]} time(s)`;
}