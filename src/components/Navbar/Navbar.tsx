import { FC } from "react";
import AddUser from "../AddUser/AddUser";
import UserFilter from "../UserFilter/UserFilter";
import "./Navbar.css";

interface NavbarProps {
  filterValue: string;
  filterUser: (value: string) => void;
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}
const Navbar: FC<NavbarProps> = ({
  filterValue,
  filterUser,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <div className="navbar">
      <UserFilter filterValue={filterValue} filterUser={filterUser} />
      <AddUser modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </div>
  );
};

export default Navbar;
