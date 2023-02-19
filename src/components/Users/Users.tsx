import { FC } from "react";
import { User } from "../../types/types";
import UserCard from "../UserCard/UserCard";

import "./Users.css";

interface UserProps {
  users: User[];
  removeUser: (value: number) => void;
}

const Users: FC<UserProps> = ({ users, removeUser }) => {
  return (
    <div className="UsersWrapper">
      {users.map((user) => (
        <UserCard user={user} key={user.id} removeUser={removeUser} />
      ))}
    </div>
  );
};

export default Users;
