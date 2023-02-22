import React from "react";
import { OptionType } from "../../types/types";
import "./FilterList.css";

const optionList: OptionType[] = ["name", "phone"];

type FilterListProps = {
  optionType?: string;
  setOptionType: (value: OptionType) => void;
};

const FilterList = ({ optionType, setOptionType }: FilterListProps) => {
  return (
    <div className="filterTypeWrapper">
      <select
        className="selectWrapper"
        value={optionType}
        onChange={(e) => setOptionType(e.target.value as OptionType)}
      >
        {optionList.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterList;
