import React, { Ref } from "react";
import { ChangeHandler } from "react-hook-form";
import style from "./Form.module.scss";

export type Option = {
  label: string;
  value: string;
}

export type Register = {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  name: string;
};

type Props = {
  name: string;
  options: Option[];
  changeHandler: (value: string) => void;
  placeHolder: string;
  register?: (name: string) => Register;
}

export const Select: React.FC<Props> = ({
  name,
  options,
  changeHandler,
  placeHolder,
  register
}) => {
  return (
    <>
      <select
        {...(register && register(name))}
        onChange={(e) => changeHandler(e.currentTarget.value)}
      >
        {placeHolder && (
          <option className={style.firstOption} value="">
            {placeHolder}
          </option>
        )}
        {options.map((option: Option, index: number) => (
          <option key={index} value={option.value}></option>
        ))}
      </select>
    </>
  );
}