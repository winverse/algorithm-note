function solution(s, t) {
  let answer = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === t) {
      answer.push(0);
      continue;
    }

    for (let k = 1; k < s.length; k += 1) {
      const left = i - k >= 0 ? i - k : 0;
      const right = i + k >= s.length - 1 ? s.length - 1 : i + k;

      if (s[left] === t) {
        answer.push(k);
        break;
      }

      if (s[right] === t) {
        answer.push(k);
        break;
      }
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e")); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]
