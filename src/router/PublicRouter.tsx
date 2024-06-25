import { createBrowserRouter } from "react-router-dom";
import { RouteVar } from "./constants";
import PublicLayout from "../layout/PublicLayout";
import { ErrorPage, HomePage } from "../pages/pagesList";

export const router = createBrowserRouter([
  {
    path: RouteVar.home,
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      //   {
      //     path: RouteVar.catalog,
      //     element: <CatalogPage />,
      //   },
      //   {
      //     path: RouteVar.addItem,
      //     element: <CreateItemPage />,
      //   },
      //   {
      //     path: RouteVar.itemDetails,
      //     element: <ProductPage />,
      //   },
    ],
  },
]);
