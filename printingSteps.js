printSteps(5);
printSteps(12);

printStairs(5);

stepsRecursive(5);

function printSteps(numOfSteps) {
  let spaces = numOfSteps - 1;
  let flagpole = "|>"
  for (let i = 1; i <= numOfSteps; i++) {
    console.log("#".repeat(i) + " ".repeat(spaces) + flagpole);
    spaces --;
    flagpole = "|";
  }
}

function printStairs(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

function stepsRecursive(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return stepsRecursive(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  stepsRecursive(n, row, stair);
}