import axiosInstance from "./index";

export function getPopularMovies() {
  const config = {
    method: "GET",
    url: `/movie/popular`,
    params: {
      page: 1,
    },
  };

  const res = axiosInstance(config);
  return res;
}
