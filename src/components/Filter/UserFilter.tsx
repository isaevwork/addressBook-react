import React, { ChangeEvent, FC, useState } from "react";
import ClearSearchTab from "../../assets/ui/ClearSearchTab";
import SearchIcon from "../../assets/ui/SearchIcon";
import "./UserFilter.css";

interface UserFilterProps {
  setValue: (value: string) => void;
  setSearchValue: (value: string) => void;
  searchValue: string;
}

const UserFilter = ({
  setValue,
  setSearchValue,
  searchValue,
}: UserFilterProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  const getClean = () => {
    setValue("");
  };

  return (
    <div className="filterWrapper">
      <input
        type="text"
        placeholder="Искать..."
        value={searchValue}
        onChange={onChange}
      />
      <div className="searchIcon">
        <SearchIcon />
      </div>
      <button className="clearIcon" onClick={getClean}>
        <ClearSearchTab />
      </button>
    </div>
  );
};

export default UserFilter;
