import "./Checkbox.css";

type CheckboxProps = {
  onChangeCheckbox: () => void;
  checked: boolean;
};
const Checkbox = ({
  onChangeCheckbox,
  checked,
}: CheckboxProps) => {
  return (
    <>
      <div
        className={`${!checked ? "checkboxContainerFalse" : "checkboxContainerTrue"
          }`}
        onClick={() => onChangeCheckbox()}
      ></div>
    </>
  );
};

export default Checkbox;
