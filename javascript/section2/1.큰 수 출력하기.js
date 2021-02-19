// 큰 수 출력하기

function solution(arr) {
  let answer = [];

  arr.reduce((acc, cur) => {
    if (acc < cur) {
      answer.push(cur);
    }
    return cur;
  }, 0);

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];

console.log(solution(arr)); // [7, 9, 6, 12]
