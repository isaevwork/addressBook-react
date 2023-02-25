import { useState } from "react";
import Checkbox from "../../assets/ui/Checkbox/Checkbox";
import RemoveUserIcon from "../../assets/ui/RemoveUserIcon";
import { User } from "../../types/types";
import "./UserCard.css";

interface UserCardProps {
  user: User;
  removeUser: (value: number) => void;
  getSelectionText: (value: string) => void;
}

const UserCard = ({ user, removeUser, getSelectionText }: UserCardProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    removeUser(user.id);
  };

  const onChangeCheckbox = () => {
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <div className="cardWrapper">
      <Checkbox onChangeCheckbox={onChangeCheckbox} checked={checked} />

      <div className="cardContent">
        <div className="nameCard">{getSelectionText(user.name)}</div>
        <div className="phoneNumberCard">{getSelectionText(user.phone)}</div>
      </div>
      <div className="emailNumberCard">{getSelectionText(user.email)}</div>
      <div className="buttonRemove">
        <button onClick={handleChange}>
          <RemoveUserIcon />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
