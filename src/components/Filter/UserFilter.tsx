import React, { ChangeEvent, FC } from "react";
import SearchIcon from "../../assets/ui/SearchIcon";
import "./UserFilter.css";

interface UserFilterProps {
  setValue: (value: string) => void;
}

const UserFilter = ({ setValue }: UserFilterProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
