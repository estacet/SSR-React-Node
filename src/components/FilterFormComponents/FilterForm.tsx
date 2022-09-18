import React, {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { Form } from "./Form/Form";
import { Select } from "./Form/Select";
import { RenderedFormSelections } from "./RenderedFormSelections";
import style from "./FilterForm.module.scss";
import { AppContext } from "../../shared/context/AppContext";
import { results } from "../Table/Table";
import { User } from "../../types/commonTypes";

export const FilterForm: React.FC = () => {
  //const { results } = useContext(AppContext);
  const memorizedCountriesOptions = useCallback(() => {
    const countries: string[] = [];
    results.map((user: User) => {
      countries.push(user.location.country);
    })
    return [...new Set(countries)];
  }, [results]);
  const [countriesOptions, setCountriesOptions] = useState(memorizedCountriesOptions);
  const [selectedCountries, _setSelectedCountries] = useState<string[]>([]);
  const selectedCountriesRef = useRef<string[]>(selectedCountries);
  const setSelectedCountries = useCallback((data: string[]) => {
    selectedCountriesRef.current = data;
    _setSelectedCountries([...data]);
  }, []);
  
  const [genderOptions, setGenderOptions] = useState(["male", "female"]);
  const [selectedGenders, _setSelectedGender] = useState<string[]>([]);
  const selectedGendersRef = useRef<string[]>(selectedGenders);
  const setSelectedGenders = useCallback((data: string[]) => {
    selectedGendersRef.current = data;
    _setSelectedGender([...data]);
  }, []);
  
  const [activeFilterForm, setActiveFilterForm] = useState(false);
  
  const copyOfGenders = [...selectedGenders];
  const copyOfCountries = [...selectedCountries];
  const copyOfGenderOptions = [...genderOptions];
  const copyOfCountriesOptions = [...countriesOptions];
  
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
    <div className={style.filterForm}>
      {activeFilterForm && (
        <div className={style.formValuesBlock}>
          <RenderedFormSelections
            state={copyOfGenders}
            setState={setSelectedGenders}
            onDeleteItem={(item: string) => {
              const updatedOptions = onOptionUnselect(
                item,
                copyOfGenderOptions
              );
              setGenderOptions(updatedOptions);
              if (
                selectedGendersRef.current.length == 0 &&
                selectedCountriesRef.current.length == 0
              ) {
                setActiveFilterForm(false);
              }
            }}
          />
          <RenderedFormSelections
            state={copyOfCountries}
            setState={setSelectedCountries}
            onDeleteItem={(item: string) => {
              const updatedOptions = onOptionUnselect(item, copyOfCountriesOptions);
              setCountriesOptions(updatedOptions);
              if (
                selectedGendersRef.current.length == 0 &&
                selectedCountriesRef.current.length == 0
              ) {
                setActiveFilterForm(false);
              }
            }}
          />
        </div>
      )}
      <div className={`${style.formWrapper} ${activeFilterForm && style.activeForm}`}>
        <Form>
          <Select
            name={"gender"}
            options={genderOptions}
            placeHolder={"Gender"}
            changeHandler={(value: string) => {
              setActiveFilterForm(true);
              console.log(value);
              setSelectedGenders([...selectedGenders, value]);
              onOptionSelect(copyOfGenderOptions, value, setGenderOptions)
            }}
          />
          <Select
            name={"countries"}
            options={countriesOptions}
            placeHolder={"Countries"}
            changeHandler={(value: string) => {
              console.log(value);
              setActiveFilterForm(true);
              setSelectedCountries([...selectedCountries, value]);
              onOptionSelect(copyOfCountriesOptions, value, setCountriesOptions);
            }}
          />
        </Form>
      </div>
    </div>
  );
};
