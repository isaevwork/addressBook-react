import React, { FC } from "react";
import RemoveUserIcon from "../../assets/ui/RemoveUserIcon";
import { User } from "../../types/types";
import "./UserCard.css";

interface UserCardProps {
  user: User;
  removeUser: (value: number) => void;
  getSelectionText: (value: string) => void;
}

const UserCard: FC<UserCardProps> = ({
  user,
  removeUser,
  getSelectionText,
}) => {
  const handleChange = () => {
    console.log(user.id);
    removeUser(user.id);
  };
  return (
    <div className="cardWrapper">
      <div className="cardContent">
        <div className="nameCard">
          <span style={{ fontFamily: "monospace", fontSize: 14 }}> </span>
          {getSelectionText(user.name) + "fdf"}
        </div>
        <div className="phoneNumberCard">{user.phone}</div>
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
