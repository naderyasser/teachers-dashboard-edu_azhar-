import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// React router dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// redux condig
import { store } from "./store/store.js";
import { Provider } from "react-redux";
// Pages
import Home from "./pages/Home";
import Course from "./pages/Course.jsx";
import Users from "./pages/Users.jsx";
import Codes from "./pages/Codes.jsx";
import Settings from "./pages/Settings.jsx";
import Analysis from "./pages/Analysis.jsx";
import Exams from "./pages/Exams.jsx";

import PageNotFound from "./pages/PageNotFound.jsx";

import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Course />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/codes",
        element: <Codes />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/exams",
        element: <Exams />,
      },
      {
        path: "/analysis",
        element: <Analysis />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
