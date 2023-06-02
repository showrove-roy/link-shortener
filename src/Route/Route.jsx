import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Nextlink from "../Components/Nextlink";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <App></App> },
      {
        path: "/next",
        element: <Nextlink></Nextlink>,
      },
    ],
  },
]);
