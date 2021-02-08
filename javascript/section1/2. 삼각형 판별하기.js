// function solution(a, b, c) {
//   const m = Math.max(a, b, c);
//   const sum = [a, b, c]
//     .filter((v) => v !== m)
//     .reduce((acc, cur) => acc + cur, 0);

//   if (sum > m) {
//     return "YES";
//   } else {
//     return "NO";
//   }
// }

function solution(a, b, c) {
  const max = Math.max(a, b, c);
  const sum = a + b + c;
  let answer = "YES";
  if (sum - max <= max) {
    answer = "NO";
  }
  return answer;
}

console.log(solution(13, 33, 17)); // NO
console.log(solution(6, 7, 11)); // YES
