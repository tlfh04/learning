// 자료형 null
// 개발자가 의도한 "빈 데이터"

// 자료형 undefined
// 개발자가 의도하지 않은 "빈 데이터"

let value1;

let value2 = null;

if (value1 === undefined) {
  console.log(value1);
}
if (value2 === null) {
  console.log(value2);
}

let value3 = null ?? "기본값";

console.log(value3);
