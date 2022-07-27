import React, { ReactElement, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cards } from "./pages/Cards";
import { Card } from "./pages/UniqueCard";


export const commonRoutes = [
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

const allRoutes: JSX.Element[] =
  commonRoutes.map((r) => (
    <Route key={r.key} path={r.path} component={r.component} exact />
  ));
console.log(allRoutes);

export const GetRoutes = (): ReactElement => {
  return (
    <>
      <Suspense fallback={<div>Loading...Please Wait</div>}>
        <Switch>{allRoutes}</Switch>
      </Suspense>
    </>
  );
}