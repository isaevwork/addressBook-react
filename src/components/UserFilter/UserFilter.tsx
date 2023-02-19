import React, { FC } from "react";
import "./UserFilter.css";

interface UserFilterProps {
  filterValue: string;
  filterUser: (value: string) => void;
}

const UserFilter: FC<UserFilterProps> = ({ filterValue, filterUser }) => {
  return (
    <div className="filterWrapper">
      <input
        type="text"
        placeholder="Искать..."
        value={filterValue}
        // onChange={(e) => filterUser()}
      />
    </div>
  );
};

export default UserFilter;
