// 모듈 불러오기
// import / from

// from : 어디서 불러올 것이냐
// import : 무엇을 불러올 것이냐
import * as math from "./math.js";
import add from "./계산기.js";
import calculator from "./calculator.js";

console.log(math.add(1, 2));
console.log(math.sub(1, 2));
console.log(math.mul(1, 2));
console.log(math.div(1, 2));
console.log(add(1, 2));
console.log(calculator.add(1, 2));
console.log(calculator.sub(1, 2));
console.log(calculator.mul(1, 2));
console.log(calculator.mulArrow(1, 2));
