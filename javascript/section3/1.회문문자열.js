function solution(s) {
  let lower = s.toLowerCase();
  let answer = "";
  let right = s.length - 1;

  for (let left = 0; left < right; left += 1) {
    if (lower[left] === lower[right]) {
      answer = "YES";
      right -= 1;
    } else {
      answer = "NO";
      break;
    }
  }

  return answer;
}

let str = "goooG";
const str2 = "parseesraP2";
console.log(solution(str)); // YES
