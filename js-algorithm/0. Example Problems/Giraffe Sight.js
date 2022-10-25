
function answer(giraffe) {
  let result = 0;
  let stack = [];
  giraffe.push(Number.MAX_SAFE_INTEGER);

  for(let i = 0; i < giraffe.length; i++) {
    while (!stack.isEmpty() && stack.peek()["height"] < giraffe[i]) {
      result += index - stack.pop()["index"] - 1;
    }
    stack.push({ height: giraffe[i], index: i });
  }

  return result;
}

let input = [
  // TC: 1
  [10, 3, 7, 4, 12, 2],

  // TC: 2
  [7, 4, 12, 1, 13, 11, 12, 6],

  // TC: 3
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
