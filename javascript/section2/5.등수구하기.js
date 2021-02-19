function solution(arr) {
  const sorted = [...arr]
    .filter((v, i) => arr.indexOf(v) === i)
    .sort((a, b) => b - a);

  const result = [];

  arr.forEach((v) => {
    const rank = sorted.indexOf(v);
    result.push(rank + 1);
  });

  return result;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr)); // [4, 3, 2, 1, 5]
