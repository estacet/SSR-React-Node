import React, {
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { Form } from "../MainForm/Form";
import { Select } from "../MainForm/Select";
import { RenderedFormSelections } from "./RenderedFormSelections";
import style from "./FilterForm.module.scss";
import { AppContext } from "../../shared/context/AppContext";

export const FilterForm: React.FC = () => {
  const { cardNames, cardColors } = useContext(AppContext);
  const [namesOptions, setNamesOptions] = useState<any[]>(cardNames);
  const [colorsOptions, setColorsOptions] = useState<any[]>(cardColors);
  const [activeFilterForm, setActiveFilterForm] = useState(false);
  const [selectedCardNames, _setSelectedCardNames] = useState<string[]>([]);
  const selectedCardNamesRef = useRef<string[]>(selectedCardNames);
  
  const setSelectedCardNames = useCallback((data: string[]) => {
    selectedCardNamesRef.current = data;
    _setSelectedCardNames([...data]);
  }, []);
  const [selectedCardColors, _setSelectedCardColor] = useState<string[]>([]);
  const selectedCardColorRef = useRef<string[]>(selectedCardColors);
  
  const setSelectedTags = useCallback((data: string[]) => {
    selectedCardColorRef.current = data;
    _setSelectedCardColor([...data]);
  }, []);
  
  const copyOfNames = [...selectedCardNames];
  const copyOfColors = [...selectedCardColors];
  const copyOfNamesOptions = [...namesOptions];
  const copyOfColorsOptions = [...colorsOptions];
  
  const onOptionSelect = (
    copyOfSelectOptionsArr: any[],
    chosenOption: string,
    setState: (state: any[]) => void
  ): void => {
    const removeIndex = copyOfSelectOptionsArr.findIndex(
      (option) => option === chosenOption
    );
    copyOfSelectOptionsArr.splice(removeIndex, 1);
    setState(copyOfSelectOptionsArr);
  };
  
  const onOptionUnselect = (
    item: string,
    optionsArr: any[]
  ): any[] => {
    optionsArr.push({
      label: item.charAt(0).toUpperCase() + item.slice(1),
      value: item,
    });
    return optionsArr;
  };
  
  return (
    <>
      {activeFilterForm && (
        <div className={style.formValuesBlock}>
          <RenderedFormSelections
            state={copyOfNames}
            setState={setSelectedCardNames}
            onDeleteItem={(item: string) => {
              const updatedOptions = onOptionUnselect(
                item,
                copyOfNamesOptions
              );
              setNamesOptions(updatedOptions);
              if (
                selectedCardNamesRef.current.length == 0 &&
                selectedCardColorRef.current.length == 0
              ) {
                setActiveFilterForm(false);
              }
            }}
          />
          <RenderedFormSelections
            state={copyOfColors}
            setState={setSelectedTags}
            onDeleteItem={(item: string) => {
              const updatedOptions = onOptionUnselect(item, copyOfColorsOptions);
              setColorsOptions(updatedOptions);
              if (
                selectedCardNamesRef.current.length == 0 &&
                selectedCardColorRef.current.length == 0
              ) {
                setActiveFilterForm(false);
              }
            }}
          />
        </div>
      )}
      <div className={activeFilterForm ? style.activeForm : ""}>
        <Form>
          <Select
            name={"names"}
            options={namesOptions}
            placeHolder={"Names"}
            changeHandler={(value: string) => {
              setActiveFilterForm(true);
              setSelectedCardNames([...selectedCardNames, value]);
              onOptionSelect(copyOfNamesOptions, value, setNamesOptions)
            }}
          />
          <Select
            name={"colors"}
            options={colorsOptions}
            placeHolder={"colors"}
            changeHandler={(value: string) => {
              console.log(value);
              setActiveFilterForm(true);
              setSelectedTags([...selectedCardColors, value]);
              onOptionSelect(copyOfColorsOptions, value, setColorsOptions);
            }}
          />
        </Form>
      </div>
    </>
  );
};
