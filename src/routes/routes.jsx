import ErrorPage from "./ErrorPage/ErrorPage";
import HomePage from "./HomePage/HomePage";
import ShopPage from "./ShopPage/ShopPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  }
]

export default routes;