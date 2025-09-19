// 함수 선언은 function 키워드로 시작

// 함수의 호출
const result = add(1, 2);

let result2 = add(3, 4);

console.log(result);
console.log(result2);

function add(n, m) {
  return n + m;
}

// 함수 표현식

function datermine(number) {
  if (number < 0) {
    return "음수";
  } else if (number === 0) {
    return "0";
  } else {
    return "양수";
  }
}

const datermine1 = (number) => {
  if (number < 0) {
    return "음수";
  } else if (number === 0) {
    return "0";
  } else {
    return "양수";
  }
};

console.log(datermine1(2));
console.log(datermine(2));
