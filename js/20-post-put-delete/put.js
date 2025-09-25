import axios from "axios";

const putProduct = async () => {
  const config = {
    url: "https://dummyjson.com/products/1",
    method: "put",
    headers: { "Content-Type": "application/json" },
    data: {
      title: "갤럭시 폴드7",
    },
  };
  const res = await axios(config);

  const data = res["data"];
  console.log(data);
};
putProduct();
