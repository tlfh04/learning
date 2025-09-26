
// 변수 선언
const name = "jun";
const age = 25;

// 객체 생성
const person1 = {
  name: name,
  age: age,
};

// 단축 프로퍼티 사용
const person2 = {
  name, // name: name과 동일
  age, // age: age와 동일
};

console.log(person1); // { name: 'jun', age: 25 }
console.log(person2); // { name: 'jun', age: 25 }