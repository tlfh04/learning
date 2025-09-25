import axios from "axios";

const postProducts = async () => {
  const URL = "https://dummyjson.com/products/add";
  const METHOD = "POST";
  const body = { title: "갤럭시 폴드7", category: "스마트폰" };
  const headers = {
    "Content-Type": "application/json",
  };
  const config = {
    url: URL,
    method: METHOD,
    headers: headers,
    data: body,
  };
  const res = await axios(config);
  const data = res["data"];
  console.log(data);
};

postProducts();
