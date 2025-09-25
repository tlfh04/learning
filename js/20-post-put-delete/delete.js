import axios from "axios";

const deletePost = async () => {
  const config = {
    url: "https://dummyjson.com/products/1",
    method: "delete",
  };
  const res = await axios(config);

  const data = res["data"];
  console.log(data);
};
deletePost();
