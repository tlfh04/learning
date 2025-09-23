// 비동기 처리 하무
// setTimeOut, setInterval, fetch

// setTimeout(callback,ms){}
// 밀리초 뒤에 콜백 함수를 호출하는 방식

function printMessage(number) {
  console.log(number);
}

printMessage(1);

setTimeout(() => {
  printMessage(2);
}, 5000);

printMessage(3);

