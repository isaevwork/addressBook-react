import React, { FC, useState } from "react";
import "./MyModal.css";

interface MyModalProps {
  setModalVisible: (value: boolean) => void;
}

const MockUser = {
  id: 0,
  name: '',
  phone: '',
  email: '',
  adress: { city: '', street: '' },
}
const MyModal = ({ setModalVisible }: MyModalProps) => {
  const [user, setUser] = useState(MockUser);
  
  const onChange = (e) => {
    e.preventDefault();
  }
  return (
    <div className="myModalWrapper" onClick={() => setModalVisible(false)}>
      <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
        <form className="formWrapper">
          <input type="text" placeholder="Name" onChange={onChange}/>
          <input type="text" placeholder="Username" onChange={onChange}/>
          <input type="text" placeholder="Email" onChange={onChange}/>
          <input type="text" placeholder="City" onChange={onChange}/>
          <input type="text" placeholder="Street" onChange={onChange}/>
          <button>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default MyModal;
