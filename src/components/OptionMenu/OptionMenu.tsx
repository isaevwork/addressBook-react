import React from "react";
import { User } from "../../types/types";
import "./OptionMenu.css";

type OptionMenuProps = {
  selectedAll: boolean;
  checked: boolean;
  addSelectAll: (value: boolean) => void;
  removeUser: (value: number) => void;
  user: User;
  setIsModalConfirm: (value: boolean) => void;
  isModalConfirm: boolean;
};

const OptionMenu = ({
  isModalConfirm,
  setIsModalConfirm,
  selectedAll,
  addSelectAll,
  checked,
  removeUser,
  user,
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
