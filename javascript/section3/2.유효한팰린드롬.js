function solution(s) {
  let answer = "";

  const word = s.toLowerCase().replace(/[^a-z]/g, "");

  let right = word.length - 1;

  for (let left = 0; left < right; left += 1) {
    if (word[left] === word[right]) {
      answer = "YES";
      right -= 1;
    } else {
      answer = "NO";
      break;
    }
  }

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
