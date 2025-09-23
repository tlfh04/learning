import axios from "axios";
const BASE_URL = "https://dummyjson.com";

const textRoute = async () => {
  // fetch("https://dummyjson.com/test")
  //   .then((res) => res.json())
  //   .then(console.log);
  const data = await axios.get(`${BASE_URL}/test`);
  console.log(data["data"]);
  // console.table(Object.entries(data));
};
//textRoute();

async function getAllProducts() {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const products = data["products"];
  console.log(products);
}
//getAllProducts();

const singleProduct = async (N) => {
  const res = await axios.get(`${BASE_URL}/products/${N}`);
  console.log(res["data"]);
};

//singleProduct(1);

const searchProducts = async (products) => {
  const res = await axios.get(`${BASE_URL}/products/search?q=${products}`);
  console.log(res["data"]);
};

//searchProducts("phone");

const skipProducts = async () => {
  const res = await axios.get(
    `${BASE_URL}/products?limit=10&skip=10&select=title,price`
  );
  console.log(res["data"]);
};

skipProducts();
