function solution(a, b) {
  return b == 0 ? a : solution(b, a % b);
}

console.log(solution(315, 133)); // 7

function factorial(a) {
  if (a === 1) {
    return 1;
  }
  return a * factorial(a - 1);
}

console.log(factorial(5));
