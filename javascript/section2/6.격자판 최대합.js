function solution(arr) {
  const sum = (some) => some.reduce((acc, cur) => acc + cur);

  const box = [...arr];

  let temp = [];
  arr.forEach((v, i) => {
    // 행 추출하기
    for (let k = 0; k < arr.length; k++) {
      temp.push(arr[k][i]);
      if (temp.length === arr.length) {
        box.push(temp);
        temp = [];
      }
    }
  });

  let reverse = [];
  // 대각선 추출하기
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i][i]);
    if (temp.length === arr.length) {
      box.push(temp);
      temp = [];
    }

    reverse.push(arr[i][arr.length - (i + 1)]);

    if (reverse.length === arr.length) {
      box.push(reverse);
      reverse = [];
    }
  }

  let answer = 0;
  box.reduce((acc, cur) => {
    const total = sum(cur);
    if (acc < total) {
      answer = total;
    }
    return total;
  }, 0);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
