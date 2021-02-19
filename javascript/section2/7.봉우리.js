function solution(arr) {
  let answer = 0;

  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[y].length; x++) {
      const value = arr[y][x];

      const up = y === 0 ? 0 : arr[y - 1][x];
      const down = y === arr.length - 1 ? 0 : arr[y + 1][x];

      const left = x === 0 ? 0 : arr[y][x - 1];
      const right = x === arr[y].length - 1 ? 0 : arr[y][x + 1];

      const box = [value, up, down, left, right];

      const sorted = box.sort((a, b) => a - b);

      const maxValueIndex = sorted.indexOf(value);

      if (sorted.length - 1 === maxValueIndex) {
        answer += 1;
      }
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));

// function solution(arr) {
//   let answer = 0;

//   return answer;
// }

// let arr = [
//   [5, 3, 7, 2, 3],
//   [3, 7, 1, 6, 1],
//   [7, 2, 5, 3, 4],
//   [4, 3, 6, 4, 1],
//   [8, 7, 3, 5, 2],
// ];
// console.log(solution(arr));
