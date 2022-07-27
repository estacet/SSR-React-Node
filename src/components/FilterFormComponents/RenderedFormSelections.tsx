import React, { useState } from "react";
import style from "./FilterForm.module.scss";

type Props = {
  state: string[];
  setState: (state: string[]) => void;
  onDeleteItem: (item: string) => void;
};

export const RenderedFormSelections: React.FC<Props> = ({
  state,
  setState,
  onDeleteItem,
}) => {
  const [showAllSelections, setShowAllSelections] = useState(false);
  const twoSelectedValuesToDisplay = state.slice(0, 1);
  return (
    <>
      {!showAllSelections ? (
        <div className={style.limitedSelectedItems}>
          {state.length < 2 ? (
            state.map((item: string, index) => (
              <span key={index} className={style.formValue}>
                {item}
                <div
                  onClick={() => {
                    state.splice(state.indexOf(item), 1);
                    setState(state);
                    onDeleteItem(item);
                  }}
                >
                  X
                </div>
              </span>
            ))
          ) : (
            <>
              {twoSelectedValuesToDisplay.map((item: string, index) => (
                <span key={index} className={style.formValue}>
                  {item}
                  <div
                    onClick={() => {
                      state.splice(state.indexOf(item), 1);
                      setState(state);
                      onDeleteItem(item);
                    }}
                  >
                  X
                </div>
                </span>
              ))}
              <span
                className={style.hiddenSelectedItems}
                onClick={() => {
                  setShowAllSelections(true);
                }}
              >
                {" "}
                ...
              </span>
            </>
          )}
        </div>
      ) : (
        state.length > 0 && (
          <div className={style.displayedSelectedItems}>
            <div
              onClick={() => {
                setShowAllSelections(false);
              }}
            >X</div>
            {state.map((item: string, index) => (
              <span key={index} className={style.formValue}>
                {item}
                <div
                  onClick={() => {
                    state.splice(state.indexOf(item), 1);
                    setState(state);
                    onDeleteItem(item);
                  }}
                >
                  X
                </div>
              </span>
            ))}
          </div>
        )
      )}
    </>
  );
};
