// async/await
import axios from "axios";
async function connectTest() {
  // axios.get(url): 데이터 요청에 대한 응답을 반환
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(res["data"]);
  // console.table(Object.entries(res));
}
connectTest();
