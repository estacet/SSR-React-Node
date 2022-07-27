import React, { DetailedReactHTMLElement, ReactElement } from "react";
import { useForm } from "react-hook-form";
import style from "./Form.module.scss";

export const Form: React.FC = ({ children }) => {
  const {
    register,
    handleSubmit,
  } = useForm({
    reValidateMode: "onChange",
  });

  const submittedForm = (data: any) => {
    console.log(data);
  };

  const childrenWithExtraProp = React.Children.map(children as ReactElement, (child) => {
    if (React.isValidElement(child) && child.props.name) {
      return React.cloneElement(child as DetailedReactHTMLElement<any, HTMLElement>, {
        register: register,
      });
    }
    return child;
  });

  return (
    <form className={style.form} onSubmit={handleSubmit(submittedForm)}>
      {childrenWithExtraProp}
      <button type={"submit"} onClick={handleSubmit(submittedForm)}>
        Submit
      </button>
    </form>
  );
};
