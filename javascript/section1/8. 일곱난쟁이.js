function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j === i) continue;

      const copyArray = arr.filter((v, index) => index !== j && index !== i);
      sum = copyArray.reduce((acc, cur) => acc + cur);
      if (sum === 100) {
        result = copyArray;
        break;
      }
    }
  }
  return result;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr)); // 20 7 23 19 10 8 13
