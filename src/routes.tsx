import React, { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserPage } from "./pages/User";

export const routes = [
  {
    name: "Home",
    sidebarName: " ",
    key: "/",
    path: "/",
    component: Home,
    description: "Home page",
    disabled: false,
    logoType: "Home",
  },
  {
    name: "User",
    key: "/Users/:id",
    path: "/users/:id",
    component: UserPage,
    disabled: false,
    logoType: "Users",
    divider: true,
    dividerName: "Users",
    dividerLogoType: "Users",
  },
];

const allRoutes: JSX.Element[] = routes.map(route => {
  const Component = route.component;
  return <Route
    key={route.path}
    path={route.path}
    element={<Component />}
  />
});

export const GetRoutes = (): ReactElement => {
  return (
    <div>
      <Routes>
        {allRoutes}
      </Routes>
    </div>
  );
}