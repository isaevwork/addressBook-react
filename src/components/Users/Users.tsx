import { FC, useState } from "react";
import Checkbox from "../../assets/ui/Checkbox/Checkbox";
import { User } from "../../types/types";
import OptionMenu from "../OptionMenu/OptionMenu";
import UserCard from "../UserCard/UserCard";

import "./Users.css";

interface UserProps {
  users: User[];
  removeUser: (value: number) => void;
  getSelectionText: (value: string, type: string) => JSX.Element | string;
  setIsModalConfirm: (value: boolean) => void;
  isModalConfirm: boolean;
  selectIdUser: (id: number, type?: string) => void;
}

const Users = ({
  users,
  removeUser,
  getSelectionText,
  isModalConfirm,
  setIsModalConfirm,
  selectIdUser,
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
        selectedAll={selectedAll}
        addSelectAll={addSelectAll}
      />
      {users.map((user) => (
        <UserCard
          user={user}
          key={user.id}
          removeUser={removeUser}
          getSelectionText={getSelectionText}
          selectedAll={selectedAll}
          selectIdUser={selectIdUser}
        />
      ))}
    </div>
  );
};

export default Users;
