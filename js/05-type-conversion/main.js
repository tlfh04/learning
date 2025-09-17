// true, undefine, null을 문자열로 형변환 코드 작성

console.log(String(true));
console.log(String(undefined));
console.log(String(null));

// 문자열 "123"을 숫자형으로 변환해서 출력하는 코드 작성

console.log(Number("123")); // 123
console.log(Number("123.45")); // 123.45
console.log(Number("123abc")); // NaN
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN