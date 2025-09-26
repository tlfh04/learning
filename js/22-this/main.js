function func() {
  console.log(this);
}
//func();

const obj = {
  name: "홍길동",
  age: 20,
  func: function () {
    console.log(this);
  },
};

obj.func();

const user = {
  name: "홍길동",
  age: 20,
  greet: () => {
    console.log(this);
  },
};

user.greet();

const user2 = {
  name: "홍길동",
  age: 20,
  greet: function () {
    const arrowfunc = () => {
      console.log(this);
    };
    arrowfunc();
  },
};

user2.greet();
