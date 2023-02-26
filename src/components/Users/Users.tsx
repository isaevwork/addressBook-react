import { FC, useState } from "react";
import Checkbox from "../../assets/ui/Checkbox/Checkbox";
import { User } from "../../types/types";
import OptionMenu from "../OptionMenu/OptionMenu";
import UserCard from "../UserCard/UserCard";

import "./Users.css";

interface UserProps {
  users: User[];
  checked: boolean;
  removeUser: (value: number) => void;
  getSelectionText: (value: string) => void;
  onChangeCheckbox?: (value: boolean) => void;
  setChecked: (value: boolean) => void;
  setIsModalConfirm: (value: boolean) => void;
  isModalConfirm: boolean;
}

const Users = ({
  users,
  removeUser,
  getSelectionText,
  setChecked,
  checked,
  onChangeCheckbox,
  isModalConfirm,
  setIsModalConfirm,
}: UserProps) => {
  const [selectedAll, setSelectedAll] = useState<boolean>(false);

  const addSelectAll = () => {
    setSelectedAll(!selectedAll);
  };

  return (
    <div className="UsersWrapper">
      <OptionMenu
        isModalConfirm={isModalConfirm}
        setIsModalConfirm={setIsModalConfirm}
        users={users}
        selectedAll={selectedAll}
        addSelectAll={addSelectAll}
        checked={checked}
        removeUser={removeUser}
      />
      {users.map((user) => (
        <UserCard
          user={user}
          key={user.id}
          removeUser={removeUser}
          getSelectionText={getSelectionText}
          addSelectAll={addSelectAll}
          selectedAll={selectedAll}
        />
      ))}
    </div>
  );
};

export default Users;
