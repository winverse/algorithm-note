function solution(s) {
  let answer = s[0];
  let cnt = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      cnt += 1;
      continue;
    } else if (cnt > 1 && s[i] !== s[i - 1]) {
      answer += cnt + s[i];
    } else {
      answer += s[i];
    }
    cnt = 1;
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
