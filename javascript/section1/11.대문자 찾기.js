function solution(s) {
  let answer = 0;
  const lower = s.toLowerCase();

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== lower[i]) {
      answer += 1;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str)); // 3
