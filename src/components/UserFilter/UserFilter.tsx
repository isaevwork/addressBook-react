import React, { FC } from "react";
import SearchIcon from "../../assets/ui/SearchIcon";
import "./UserFilter.css";

interface UserFilterProps {
  setValue: (value: string) => void;
}

const UserFilter: FC<UserFilterProps> = ({ setValue }) => {
  const onChange = (e) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  return (
    <div className="filterWrapper">
      <input type="text" placeholder="Искать..." onChange={onChange} />
      <div className="iconWrapper">
        <SearchIcon />
      </div>
    </div>
  );
};

export default UserFilter;
