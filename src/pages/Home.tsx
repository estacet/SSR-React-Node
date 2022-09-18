import React from "react";
import style from "./Pages.module.scss";
import { Table } from "../components/Table/Table";
import { FilterForm } from "../components/FilterFormComponents/FilterForm";

export const Home: React.FC = () => {
  return (
    <div className={style.mainPageWrapper}>
    {/*<div className={style.mainPageWrapper}>*/}
      <FilterForm />
      <Table />
    </div>
  );
}