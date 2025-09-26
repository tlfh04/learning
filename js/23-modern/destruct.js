const object = {
  name: "홍길동",
  age: 20,
  name2: "홍길동",
  age2: 20,
};

let name = object["name"];
let age = object["age"];

let { name2, age2 } = object;

console.log(name);
console.log(name2);

const object2 = {
  id: 1,
  title: "갤럭시 99",
  description: "삼성 스마트폰",
  price: 9999,
};

const { title, price } = object2;

const array = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = array;

function func(object) {
  const { name, age } = object;
  console.log(`Hello ${name} I'm ${age}`);
}
function func2({ name, age }) {
  console.log(`Hello ${name} I'm ${age}`);
}

const user = {
  name: "홍길동",
  age: 20,
};
func(user);
func2(user);
