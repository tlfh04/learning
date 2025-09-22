let array2 = [1, "2", 3];

// 첫 번째 위치
array2[0];
// 두 번째 위치
array2[1];
// 세 번째 위치
array2[2];
// 첫 번째 원소를 콘솔에 출력
console.log(array2[0]);

// 첫 번째 원소를 -1로 재할당
// 1. 첫 번째 원소에 접근
// 2. -1을 재할당
array2[0] = -1;

// 첫 번째 원소를 콘솔에 출력
console.log(array2[0]);

// 원소의 추가와 제거
// 배열데이터.push(데이터)
// .push() 함수

// 변수 array3을 선언하고, 배열 데이터 [0] 을 할당
let array3 = [0];
// 배열 array3에 1을 원소로 추가
array3.push(1);
console.log(array3);

// 배열데이터.pop
array3.pop();
console.log(array3);

// for 반복문 활용
// 배열의 인덱스가 0 부터 배열의 길이 -1 범위를 가진다는 특성을 활용
let array4 = [1, 2, 3];
console.log(array4.length);

for (let i = 0; i < array4.length; i++) {
  console.log(`${i} : ${array4[i]}`);
}

// for...of 반복문
// 인덱스(위치번호) 활용 x
// 배열에서 직접적으로 원소를 꺼내옴

for (let value of array4) {
  console.log(value);
}
