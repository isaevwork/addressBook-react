import React, { ChangeEvent, FC, useState } from "react";
import { User } from "../../types/types";
import "./MyModal.css";

interface MyModalProps {
  users: User[];
  setModalVisible: (value: boolean) => void;
  setUsers: (value: User) => void;
}

const MockUser = {
  id: 0,
  name: "",
  phone: "",
  email: "",
  adress: { city: "", street: "" },
};
const MyModal = ({ setModalVisible, users, setUsers }: MyModalProps) => {
  const [user, setUser] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  const getNewUser = (users: User[], e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    return setUsers([...users, ...user]);
  };

  return (
    <div className="myModalWrapper" onClick={() => setModalVisible(false)}>
      <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
        <form className="formWrapper">
          <input
            type="text"
            placeholder="Name"
            value={user}
            onChange={onChange}
          />
          <input type="text" placeholder="Username" onChange={onChange} />
          <input type="text" placeholder="Email" onChange={onChange} />
          <input type="text" placeholder="City" onChange={onChange} />
          <input type="text" placeholder="Street" onChange={onChange} />
          <button onClick={getNewUser}>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default MyModal;
