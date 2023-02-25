import React, { ChangeEvent } from "react";
import "./Checkbox.css";

type CheckboxProps = {
  onChangeCheckbox: (value: boolean) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  id: number;
  checked: boolean;
};
const Checkbox = ({
  onChangeCheckbox,
  onChange,
  id,
  checked,
}: CheckboxProps) => {
  return (
    <>
      {checked ? (
        <div className="checkboxContainerFalse" onClick={onChangeCheckbox}>
          <input type="checkbox" className="checkboxStyle" />
        </div>
      ) : (
        <div className="checkboxContainerTrue" onClick={onChangeCheckbox}>
          <input type="checkbox" className="checkboxStyle" />
        </div>
      )}
    </>
  );
};

export default Checkbox;
