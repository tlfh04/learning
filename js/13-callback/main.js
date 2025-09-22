// 배열 고차 메서드는
// 배열의 반복문을 함수화

// 각 원소에 +1을 한 결과를 출력
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((element) => {
  console.log(element++);
});
console.log("-------");
// 각 원소 중 2로 나눴을 때 나머지가 2인 원소만 출력
numbers.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});
console.log("-------");
// map()을 활용해서 * 2를 한 원소를 모아서 새 배열
const new_arr = numbers.map((element) => {
  return element * 2;
});
console.log(new_arr);
console.log("-------");
const new_arr2 = numbers.filter((ele, idx) => {
  if (idx % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(new_arr2);

const result = numbers.reduce((acc, ele) => {
  return (acc += ele);
}, 0);
console.log(result);

const sort = numbers.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(sort);
