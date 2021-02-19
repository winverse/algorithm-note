function solution(str) {
  let answer = [];
  for (let i of str) {
    const toNumber = Number(i);
    if (!isNaN(toNumber)) {
      answer.push(i);
    }
  }
  return Number(answer.join(""));
}

let str = "g0en2T0s8eSoft";
console.log(solution(str)); // 208
