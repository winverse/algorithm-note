function solution(arr) {
  const odd = arr.filter((v) => v % 2 == 1);

  const min = Math.min(...odd);
  const sum = odd.reduce((acc, cur) => acc + cur);

  return { min, sum };
}

arr = [12, 77, 38, 41, 53, 92, 85];

console.log(solution(arr)); // { min: 41, sum: 256 }
