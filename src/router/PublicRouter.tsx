import { createBrowserRouter } from "react-router-dom";
import { RouteVar } from "./constants";
import PublicLayout from "../layout/PublicLayout";
import {
  AnimePage,
  ErrorPage,
  FeedbackPage,
  HomePage,
} from "../pages/pagesList";

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
      {
        path: RouteVar.feedback,
        element: <FeedbackPage />,
      },
      {
        path: RouteVar.animeDetails,
        element: <AnimePage />,
      },
    ],
  },
]);
