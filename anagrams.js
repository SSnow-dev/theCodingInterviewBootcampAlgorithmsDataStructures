//const ALPHA = /\w/;
const NONALPHA = /[^\w]/g;

console.log(anagrams("hello", "lohle"));
console.log(anagrams("hello", "lohlee"));
console.log(anagrams("helloo", "lohle"));
console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Blasty!", "By last"));

// function anagrams(stringA, stringB) {
//   const seenChars = {};
//   let isAnagram = true;

//   //add all stringA chars to object
//   stringA.split('').forEach(char => {
//     if (ALPHA.test(char)) {
//       if(!seenChars.hasOwnProperty(char.toUpperCase())) {
//         seenChars[char.toUpperCase()] = 1;
//       } else {
//         seenChars[char.toUpperCase()]++;
//       }
//     }
//   });
  
//   const stringBArr = stringB.split('');
//   index = 0;
//   //match all of stringB's chars to seenChar obj, if not evenly matched isAnagram = false
//   while (isAnagram && index < stringBArr.length) {
//     const currentChar = stringBArr[index].toUpperCase();

//     if (ALPHA.test(currentChar)) {
//       if(!seenChars.hasOwnProperty(currentChar)) {
//         isAnagram = false;
//       } else {
//         seenChars[currentChar]--;
//       }
//     }
//     index++;
//   }

//   if (Object.values(seenChars).find(value => value !== 0)) isAnagram = false;
//   return isAnagram;
// }

//refactor
function anagrams(stringA, stringB) {
  const stringALowerCaseAlpha = stringA.replace(NONALPHA, '').toLowerCase();
  const seenChars = buildCharMap(stringALowerCaseAlpha);
  let isAnagram = true;
  
  const stringBArr = stringB.replace(NONALPHA, '').toLowerCase().split('');
  index = 0;
  //match all of stringB's chars to seenChar obj, if not evenly matched isAnagram = false
  while (isAnagram && index < stringBArr.length) {
    const currentChar = stringBArr[index];

    if(!seenChars.hasOwnProperty(currentChar)) {
      isAnagram = false;
    } else {
      seenChars[currentChar]--;
    }
    index++;
  }
  //check if stringB's chars show up more or less times than stringA.
  if (Object.values(seenChars).find(value => value !== 0)) isAnagram = false;
  return isAnagram;
}

function buildCharMap(string) {
  const charMap = {};

  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}