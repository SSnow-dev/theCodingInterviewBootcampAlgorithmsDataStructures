
printTwoSidedSteps(5);
printTwoSidedSteps(15);
printTwoSidedSteps(20);

function printTwoSidedSteps(numOfSteps) {
  const fullRow = numOfSteps * 2 - 1;
  let spaces = ((fullRow - 1) / 2);
  let hashes = 1;

  for (let i = 1; i <= numOfSteps; i++) {
    console.log(" ".repeat(spaces) + "#".repeat(hashes) + " ".repeat(spaces));
    hashes += 2;
    spaces -= 1;
  }
}

// 00#00
// 0###0
// #####

// 0000A0000
// 000AAA000
// 00AAAAA00
// 0AAAAAAA0
// AAAAAAAAA

// 1 3 5 7 9

// fullAmount = steps * 2 - 1;

printTriforce(2);
printTriforce(3);
printTriforce(5);
printTriforce(10);
printTriforce(15);

function printTriforce(n) {
  const fullRow = n * 2 - 1;
  const solid = '3';
  let spaces = ((fullRow - 1) / 2);
  let hashes = 1;

  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(fullRow) + " ".repeat(spaces) + solid.repeat(hashes) + " ".repeat(spaces));
    hashes += 2;
    spaces -= 1;
  }

  spaces = ((fullRow - 1) / 2);
  hashes = 1;

  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(fullRow - n) + " ".repeat(spaces) + solid.repeat(hashes) + " ".repeat(spaces),
    " ".repeat((fullRow - n) - (n - 1)) + " ".repeat(spaces) + solid.repeat(hashes) + " ".repeat(spaces));
    hashes += 2;
    spaces -= 1;
  }
}