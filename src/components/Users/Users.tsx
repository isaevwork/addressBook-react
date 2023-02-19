import { FC } from "react";
import { User } from "../../types/types";
import UserCard from "../UserCard/UserCard";

import "./Users.css";

interface UserProps {
  users: User[];
}

const Users: FC<UserProps> = ({ users }) => {
  return (
    <div className="UsersWrapper">
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default Users;
