import React, { FC } from "react";
import { User } from "../../types/types";
import "./UserCard.css";

interface UserCardProps {
  user: User[];
  removeUser: (value: number) => void;
}

const UserCard: FC<UserCardProps> = ({ user, removeUser }) => {
  const handleChange = () => {
    console.log(user.id);
    removeUser(user.id);
  };
  return (
    <div className="cardWrapper">
      <div className="cardContent">
        <div>
          <span style={{ fontFamily: "monospace", fontSize: 14 }}>Name: </span>
          {user.name}
        </div>
        <div>
          <span style={{ fontFamily: "monospace", fontSize: 14 }}>
            Username:{" "}
          </span>
          {user.username}
        </div>
        <div>
          <span style={{ fontFamily: "monospace", fontSize: 14 }}>Email: </span>
          {user.email}
        </div>
        <div>
          <span style={{ fontFamily: "monospace", fontSize: 14 }}>City: </span>
          {user.address.city}
        </div>
      </div>
      <div className="buttonMenu">
        <button onClick={handleChange}>Удалить</button>
      </div>
    </div>
  );
};

export default UserCard;
