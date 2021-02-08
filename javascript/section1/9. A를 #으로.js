function solution(s) {
  return s.toUpperCase().replace(/A/g, "#");
}

let str = "BANANA";
console.log(solution(str)); // B#N#N#
