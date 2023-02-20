import { FC } from "react";
import AddUser from "../AddUser/AddUser";
import UserFilter from "../UserFilter/UserFilter";
import "./Navbar.css";

type NavbarProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  setValue: (value: string) => void;
}

const Navbar = ({
  modalVisible,
  setModalVisible,
  setValue,
}: NavbarProps) => {
  return (
    <div className="navbar">
      <UserFilter setValue={setValue}/>
      <AddUser modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </div>
  );
};

export default Navbar;
