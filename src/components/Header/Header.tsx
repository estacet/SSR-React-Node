import React from "react";
import style from "./Header.module.scss"

export const Header:React.FC = () => {
  return (
    <div className={style.header}>
      <p>Random users</p>
    </div>
  );
}