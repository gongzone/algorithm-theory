// 재귀함수의 콜 스택이 깊어질수록 메모리 오버헤드 (스택 오버 플로우 stack overflow)가
// 발생하는 문제를 해결하기 위한 재귀 호출 방식을 꼬리 재귀라고 한다.

// 재귀함수의 실행 결과가 연산에 사용되지 않고 바로 반환되게 함으로써 이전 함수의 상태를 유지할 필요가 없도록 재귀 함수를 작성하는 것.

// 꼬리 재귀가 동작하려면 엔진에서 TCO (Tail Call Optimization)를 지원해줘야 한다.

// S: O(n)
function recFactorial(x) {
  if (x <= 1) return 1;
  else return x * recFactorial(x - 1);
}

// S: O(1)
function tailFactorial(x, totalSoFar = 1) {
  if (x === 0) return totalSoFar;
  else return tailFactorial(x - 1, totalSoFar * x);
}
