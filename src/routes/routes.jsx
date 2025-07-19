import { element } from "prop-types";
import ErrorPage from "./ErrorPage/ErrorPage";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";
import Root from "./Root/Root";
import ShopPage from "./ShopPage/ShopPage";
import CheckoutPage from "./CheckoutPage/CheckoutPage";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "shop/product/:productId",
        element: <ProductPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      }
    ]
  },
]

export default routes;