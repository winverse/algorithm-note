// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
// 예를 들어 N=5이면
// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.

function solution(a, b) {
  let answer = [];
  for (let i = 0; i < 5; i += 1) {
    const result = Math.abs(a[i] - b[i]);
    switch (result) {
      case 0:
        answer.push("D");
        break;
      case 1:
        a[i] > b[i] ? answer.push("A") : answer.push("B");
        break;
      case 2:
        a[i] < b[i] ? answer.push("A") : answer.push("B");
        break;
    }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b)); // [A, B, A, B, D]
