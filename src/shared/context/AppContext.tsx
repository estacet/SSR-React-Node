import React, { useState } from "react";

export const AppContext = React.createContext({});

type AppContextWrapperProps = {
  children: React.ReactNode;
};

export const AppContextWrapper = (
  props: AppContextWrapperProps
): JSX.Element => {
  const [colors, setColors] = useState([]);
  const [names, setNames] = useState([]);
  // let colors = [];
  // let names = [];
  // if (window && window.initialData) {
  //   colors = window.initialData.cardColors;
  //   names = window.initialData.cardNames;
  // }
  return (
    <AppContext.Provider value={{colors, setColors, names, setNames}}>
      {props.children}
    </AppContext.Provider>
  );
};