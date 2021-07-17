
let test1 = [1, 2, 3];
console.log(chunk(test1, 2));
console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 10));

function chunk(array, size) {
  const chunkedArr = [];
  while (true) {
    let newArr = [];
    for (let i = 0; i < size; i++) {
      if (array.length > 0) {
        newArr.push(array.shift())
      }
    }
    chunkedArr.push(newArr);
    if (array.length <= 0) break;
  }
  return chunkedArr;
}