// calculator2
// 매개변수로 받은 연산 함수를 수행하고
// 결과를 출려갛는 함수

function calculator2(operatorFunction, n1, n2) {
  const result = operatorFunction(n1, n2);

  return result;
}

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

console.log(calculator2(add, 1, 2));
 