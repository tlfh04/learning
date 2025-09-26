const user = {
  name: "홍길동",
  address: {
    city: "서울",
    country: "한국",
  },
};

console.log(user?.name);
console.log(user?.address?.city);
console.log(user?.address?.country);

console.log(user?.contact?.mail);
console.log(user?.contact?.phone);
console.log(user?.contact);
