import React, { ReactElement } from "react";
import { Home } from "./pages/Home";
import { Cards } from "./pages/Cards";
import { Card } from "./pages/UniqueCard";
import { TestCard } from "./pages/TestCard";
import { Route, Routes } from "react-router-dom";


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
    name: "Cards",
    key: "/Cards",
    path: "/cards",
    component: Cards,
    description:
      "All available cards are here",
    disabled: false,
    logoType: "Cards",
    divider: true,
    dividerName: "Cards",
    dividerLogoType: "Cards",
  },
  {
    name: "TestCards",
    key: "/TestCards",
    path: "/testCards",
    component: TestCard,
    disabled: false,
    logoType: "TestCards",
    divider: true,
    dividerName: "TestCards",
    dividerLogoType: "TestCards",
  },
  {
    name: "Cards",
    key: "/Cards/:id",
    path: "/cards/:id",
    component: Card,
    disabled: false,
    logoType: "Card",
    divider: true,
    dividerName: "Card",
    dividerLogoType: "Card",
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
    <>
      <Routes>
        {allRoutes}
      </Routes>
    </>
  );
}