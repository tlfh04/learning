let number = 1;

if (number > 0) {
  console.log("양수")
} else {
  console.log("음수")
}


let number2 = 0;

if (number2 > 0) {
  console.log("양수")
} else if(number2 < 0) {
  console.log("음수")
} else {
  console.log("0")
}

// 변수 score를 선언하고, 숫자 75를 할당한다
// 만약 변수 socre가 90 이상이라면
// 그런데 만약 변수 score가 90 미만 그리고(&&), 80 이상이라면
// 그런데 만약 변수 score가 80 미만 그리고(&&), 70 이상이라면
// 그런데 만약 변수 score가 70 미만 그리고(&&), 60 이상이라면
// 그런데 모두 아니라면

let score = 75;

if (score >= 90) {
  console.log("양수")
} else if(score < 90 && score > 80) {
  console.log("90미만 80이상")
} else if(score < 80 && score > 70) {
  console.log("80미만 70이상")
} else if(score < 70 && score > 60) {
  console.log("70미만 60이상")
} else {
  console.log("60미만")
  
}