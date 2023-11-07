import * as React from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Login/>
    ),
  },
  {
    path: "register",
    element: <Register/>,
  },
  {
    path:"home",
    element:<Home/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);