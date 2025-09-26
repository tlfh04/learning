const obj = {
  name: "홍길동",
  age: 20,
  job: "개발자",
  location: "서울",
};

const obj2 = obj;

console.log(obj);
console.log(obj2);

obj2["location"] = "대구";
console.log(obj);
console.log(obj2);

obj3 = { ...obj, age: 21 };
console.log(obj3);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;

objectArr = [{ name: "철수", age: 20 }];
