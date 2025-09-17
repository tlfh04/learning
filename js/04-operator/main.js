const num = 123;
const str = "Hello";
const bool = true;
const undef = undefined;
console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof bool); // boolean
console.log(typeof undef); // undefined

const a = 7;
const b = 2;
console.log(a + b); // 9
console.log(a - b); // 5
console.log(a * b); // 14
console.log(a / b); // 3.5

const trueData = true;
const falseData = false;

console.log(`false && true -> ${falseData && trueData}`);

console.log(`true || false -> ${trueData || falseData}`);
console.log(`false || false -> ${falseData || falseData}`);

console.log(`!true -> ${!trueData}`);
console.log(`!false -> ${!falseData}`);

const number = 1;
const str1 = "1";
const bool1 = number == str1;

console.log(bool1);
