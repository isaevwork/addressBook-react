import React from "react";
import { User } from "../../types/types";
import "./OptionMenu.css";

type OptionMenuProps = {
  selectedAll: boolean;
  addSelectAll: (value: boolean) => void;
  setIsModalConfirm: (value: boolean) => void;
  isModalConfirm: boolean;
};

const OptionMenu = ({
  isModalConfirm,
  setIsModalConfirm,
  selectedAll,
  addSelectAll,
}: OptionMenuProps) => {
  return (
    <div className="optionMenuWrapper">
      <div className="selectAll">
        <div
          className={`${!selectedAll ? "selectChecked" : "selectCheckedTrue"}`}
        ></div>
        <button onClick={addSelectAll}>Выделить все</button>
      </div>
      <div className="removeButtonWrapper">
        <button onClick={() => setIsModalConfirm(!isModalConfirm)}>
          Удалить все
        </button>
      </div>
    </div>
  );
};

export default OptionMenu;
