import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { Cards } from "./pages/Cards"
import { Card } from "./pages/UniqueCard"
import React, {ReactElement} from "react";

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
    <Route key={r.key} path={r.path} element={<>{r.component}</>} />
  ));
console.log(allRoutes);
export const GetRoutes = (): ReactElement => {
  return (
    <Routes>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/cards"} element={<Cards />}/>
        <Route path={"cards/:id"} element={<Card />} />
      </Routes>
    </Routes>
  );
}