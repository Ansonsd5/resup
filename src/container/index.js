import React, { useEffect } from "react";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Landing from "./Landing";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";

const Container = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ]);
  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default Container;
