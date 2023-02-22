import React, { FC } from "react";
import RemoveUserIcon from "../../assets/ui/RemoveUserIcon";
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
        <div className="nameCard">
          <span style={{ fontFamily: "monospace", fontSize: 14 }}> </span>
          {user.name}
        </div>
        <div className="phoneNumberCard">
          <b>{user.phone}</b>
        </div>
      </div>
      <div className="buttonRemove">
        <button onClick={handleChange}>
          <RemoveUserIcon />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
