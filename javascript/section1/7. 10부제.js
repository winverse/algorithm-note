// function solution(day, arr) {
//   let answer = 0;
//   arr.forEach((num) => {
//     if (String(num).slice(1, num.length) == day) {
//       answer += 1;
//     }
//   });
//   return answer;
// }

//
function solution(day, arr) {
  let answer = 0;
  arr.forEach((v) => {
    if (v % 10 === day) {
      answer += 1;
    }
  });
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];

console.log(solution(3, arr));
