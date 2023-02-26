import classNames from "classnames";
import "./Checkbox.css";

type CheckboxProps = {
  onChangeCheckbox?: (value: boolean) => void | undefined;
  addSelectAll: (value: boolean) => void;
  checked: boolean;
  selectedAll: boolean;
};
const Checkbox = ({
  onChangeCheckbox,
  checked,
  addSelectAll,
  selectedAll,
}: CheckboxProps) => {
  return (
    <>
      <div
        className={`${
          !checked ? "checkboxContainerFalse" : "checkboxContainerTrue"
        }`}
        onClick={onChangeCheckbox}
      ></div>
      <div
        className={`${
          !selectedAll ? "checkboxContainerFalse" : "checkboxContainerTrue"
        }`}
        onClick={addSelectAll}
      ></div>
    </>
  );
};

export default Checkbox;
