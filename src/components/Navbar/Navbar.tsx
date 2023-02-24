import { OptionType } from "../../types/types";
import AddUser from "../AddUser/AddUser";
import FilterList from "../Filter/FilterList";
import UserFilter from "../Filter/UserFilter";
import "./Navbar.css";

type NavbarProps = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  setValue: (value: string) => void;
  searchValue: string;
  optionType?: string;
  setOptionType: (value: OptionType) => void;
  setSearchValue: (value: string) => void;
};

const Navbar = ({
  modalVisible,
  setModalVisible,
  setValue,
  searchValue,
  optionType,
  setOptionType,
  setSearchValue,
}: NavbarProps) => {
  return (
    <div className="navbar">
      <UserFilter
        setValue={setValue}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <FilterList optionType={optionType} setOptionType={setOptionType} />
      <AddUser modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </div>
  );
};

export default Navbar;
