import { useEffect, useState } from "react";
import Checkbox from "../../assets/ui/Checkbox/Checkbox";
import RemoveUserIcon from "../../assets/ui/RemoveUserIcon";
import { User } from "../../types/types";
import "./UserCard.css";

interface UserCardProps {
  user: User;
  selectedAll: boolean;
  removeUser: (value: number) => void;
  getSelectionText: (value: string, type: string) => JSX.Element | string; // OptionType
  selectIdUser: (id: number, type?: string) => void;
}


const UserCard = ({
  user,
  removeUser,
  getSelectionText,
  selectedAll,
  selectIdUser,
}: UserCardProps) => {
  const [checked, setChecked] = useState(false);


  const handleChange = () => {
    removeUser(user.id);
  };

  const onChangeCheckbox = () => {
    if (!checked) {
      selectIdUser(user.id, 'select')
    } else {
      selectIdUser(user.id)
    }
    setChecked(!checked);
  };

  useEffect(() => {
    setChecked(selectedAll)
  }, [selectedAll])

  return (
    <div className="cardWrapper">
      <Checkbox
        onChangeCheckbox={onChangeCheckbox}
        checked={checked}
      />

      <div className="cardContent">
        <div className="nameCard">{getSelectionText(user.name, 'name')}</div>
        <div className="phoneNumberCard">{getSelectionText(user.phone, 'phone')}</div>
      </div>
      <div className="emailNumberCard">{getSelectionText(user.email, 'email')}</div>
      <div className="buttonRemove">
        <button onClick={handleChange}>
          <RemoveUserIcon />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
