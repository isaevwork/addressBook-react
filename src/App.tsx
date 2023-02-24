import { FC, useEffect, useState } from "react";
import Users from "./components/Users/Users";
import { OptionType, User } from "./types/types";

import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import MyModal from "./components/MyModal/MyModal";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [optionType, setOptionType] = useState<OptionType>("name");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const removeUser = (id: number) => {
    const updatingUsersList = users.filter((user) => user.id !== id);
    setUsers(updatingUsersList);
  };

  const getFiltredUsers = (users: User[], searchValue: string) => {
    return users.filter((user) =>
      String(user[optionType]).toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const getSelectionText = (str: string, searchValue: string) => {
    if (!searchValue) return str;
    const i = str.toLowerCase().indexOf(searchValue);
    const part1 = str.slice(0, i);
    const part2 = str.slice(i, i + searchValue.length);
    const part3 = str.slice(i + searchValue.length);
    return (
      <>
        {part1}
        <b>{part2}</b>
        {part3}
      </>
    );
  };

  return (
    <div className="App">
      <Navbar
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setValue={setSearchValue}
        optionType={optionType}
        setOptionType={setOptionType}
      />
      <Users
        users={getFiltredUsers(users, searchValue)}
        removeUser={removeUser}
        getFiltredUsers={getFiltredUsers}
        getSelectionText={getSelectionText}
      />
      {modalVisible && (
        <MyModal
          setModalVisible={setModalVisible}
          users={users}
          setUsers={setUsers}
        />
      )}
    </div>
  );
};

export default App;
