import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import CountryDetails from "./components/CountryDetails.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  // </React.StrictMode>,
);
