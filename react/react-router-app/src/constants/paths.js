// 경로 문자열을 관리 상수 객체
const PATHS = {
  // Root Layout의 중첩된 경로
  ROOT: {
    INDEX: "/",
    ABOUT: "/about",
    POSTS: "/posts",
    POST_DETAIL: "/posts/:postId",
    getPostDetail: (postId) => `/posts/${postId}`,
    PROFILE: "/profile",
  },
  AUTH: {
    INDEX: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
};

export default PATHS;
