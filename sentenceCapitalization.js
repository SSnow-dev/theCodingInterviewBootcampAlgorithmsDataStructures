const string1 = "my shift key is not working!";

console.log(capitalize(string1));
console.log(capitalize("a lazy dog... jumped or whatever"));

function capitalize(string) {
  let capString = "";
  string.split(" ").forEach(word => {
    capString += word[0].toUpperCase() + word.slice(1) + " ";
  });
  return capString.trim();
}