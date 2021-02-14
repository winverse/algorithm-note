function solution(n) {
  return new Array(n)
    .fill(1)
    .map((v, i) => v + i)
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(10)); // 55
console.log(solution(6)); // 21
