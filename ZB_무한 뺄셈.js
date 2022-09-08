function answer(x, y) {
  let sequence = [];

  sequence.push(x);
  sequence.push(y);

  while (x - y >= 0) {
    let t = x - y;
    sequence.push(t);
    x = y;
    y = t;
  }

  return sequence;
}

let input = [
  [7, 5],
  [5, 3],
  [21, 89]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}