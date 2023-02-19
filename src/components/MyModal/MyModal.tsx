import React, { FC } from "react";
import "./MyModal.css";

interface MymodalProps {
  setModalVisible: (value: boolean) => void;
  modalVisible: boolean;
}

const Mymodal: FC<MymodalProps> = ({ setModalVisible }) => {
  return (
    <div className="myModalWrapper" onClick={() => setModalVisible(false)}>
      <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
        <form className="formWrapper">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="City" />
          <button>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Mymodal;
