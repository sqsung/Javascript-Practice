function answer(a, b, c, d) {
  let result;
  let ab = a/b;
  let cd = c/d;

  if (ab > cd) {
    result = 1;
  } else if (ab < cd) {
    result = -1;
  } else {
    result = 0;
  }

  return result;
}

let input = [
  [14, 2, 6, 6],
  [6, 7, 8, 9],
  [18, 2, 36, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i +1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`);
}