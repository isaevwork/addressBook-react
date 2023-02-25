import { FC, useState } from "react";
import Checkbox from "../../assets/ui/Checkbox/Checkbox";
import { User } from "../../types/types";
import UserCard from "../UserCard/UserCard";

import "./Users.css";

interface UserProps {
  users: User[];
  removeUser: (value: number) => void;
  getSelectionText: (value: string) => void;
}

const Users = ({ users, removeUser, getSelectionText }: UserProps) => {
  return (
    <div className="UsersWrapper">
      {users.map((user) => (
        <UserCard
          user={user}
          key={user.id}
          removeUser={removeUser}
          getSelectionText={getSelectionText}
        />
      ))}
    </div>
  );
};

export default Users;
