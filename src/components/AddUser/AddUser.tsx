import React, { FC } from "react";
import "./AddUser.css";

interface AddUserProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

const AddUser: FC<AddUserProps> = ({ modalVisible, setModalVisible }) => {
  return (
    <div className="addingContent">
      <button onClick={() => setModalVisible(!modalVisible)}>ADD</button>
    </div>
  );
};

export default AddUser;
