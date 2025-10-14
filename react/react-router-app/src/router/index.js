import { createBrowserRouter } from "react-router-dom";

import rootRoutes from "./routes/rootRoutes";
import authRoute from "./routes/authRoutes";
import NotFound from "../pages/NotFound";

// 라우터 설정 생성
const router = createBrowserRouter([
  ...rootRoutes,
  ...authRoute,
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
