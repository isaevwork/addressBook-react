import { FC } from "react";
import { User } from "../../types/types";
import UserCard from "../UserCard/UserCard";

import "./Users.css";

interface UserProps {
  users: User[];
  value: string;
  removeUser: (value: number) => void;
  getSelectionText: (value: string) => void;
  getFiltredUsers: (users: User[], value: string) => void;
}

const Users = ({
  users,
  value,
  removeUser,
  getSelectionText,
  getFiltredUsers,
}: UserProps) => {
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
