import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./page-components/home/page";
import List from "./page-components/list/page";
import ListDetails from "./page-components/list/id/page";
import PageNotFound from "./page-components/not-found/page";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/list", element: <List /> },
    { path: "/list/:id", element: <ListDetails /> },
    { path: "/*", element: <PageNotFound /> },
  ]);

  return routes;
};

export default Routes;
