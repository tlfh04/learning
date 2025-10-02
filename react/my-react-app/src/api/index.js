import axios from "axios";

const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  params: { language: "ko-KR" },
  timeout: 5000,
});

axiosInstance["interceptors"]["response"].use(
  (response) => {
    console.log("통신 성공 응답 인터셉터");

    // 서버의 실제 응답 데이터 반환
    return response["data"];
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        alert("인증에 문제가 있습니다.");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
