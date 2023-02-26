import React, { ChangeEvent, FC, useState } from "react";
import { User } from "../../types/types";
import "./MyModal.css";

interface MyModalProps {
  setModalVisible: (value: boolean) => void;
  addUser: (value: User) => void;
}

const MockUser = {
  id: 0,
  name: "",
  phone: "",
  email: "",
  adress: { city: "", street: "" },
};
const MyModal = ({ setModalVisible, addUser }: MyModalProps) => {
  const [user, setUser] = useState<User>(MockUser);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("form", name, value);
    if (name === "city" || name === "street") {
      setUser({
        ...user,
        adress: {
          ...user.adress,
          [name]: value,
        },
      });
      return;
    }
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onAdd = (e: any) => {
    e.preventDefault();
    addUser({ ...user, id: Number(new Date()) });
    setModalVisible(false);
  };

  return (
    <div className="myModalWrapper" onClick={() => setModalVisible(false)}>
      <div className="myModalContent" onClick={(e: any) => e.stopPropagation()}>
        <form className="formWrapper" onChange={onChange}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="phone" name="phone" />
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="City" name="city" />
          <input type="text" placeholder="Street" name="street" />
          <button onClick={onAdd}>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default MyModal;
