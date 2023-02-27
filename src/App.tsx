import { FC, ReactElement, useEffect, useState } from "react";
import Users from "./components/Users/Users";
import { OptionType, User } from "./types/types";

import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import MyModal from "./components/MyModal/MyModal";
import ConfirmModal from "./components/MyModal/ConfirmModal";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [optionType, setOptionType] = useState<OptionType>("name");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isModalConfirm, setIsModalConfirm] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedIdUsers, setSelectedIdUsers] = useState<number[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const removeUser = (id: number) => {
    const updatingUsersList = users.filter((user) => user.id !== id);
    setUsers(updatingUsersList);
  };

  const selectIdUser = (id: number, type?: string) => {
    console.log('selectIdUser', id, type)
    if (type === 'select') {
      console.log('selectIdUser', id)
      setSelectedIdUsers([...selectedIdUsers, id])
    } else {
      const ids = selectedIdUsers.filter(index => index !== id)
      setSelectedIdUsers(ids)
    }
  }

  const removeUsers = () => {
    const newUsers = users.filter(user => !selectedIdUsers.includes(user.id))
    setUsers(newUsers)
    setIsModalConfirm(false)
  }

  const getFiltredUsers = (users: User[], searchValue: string): User[] => {
    return users.filter((user) =>
      String(user[optionType]).toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const getSelectionText = (str: string, type: string): JSX.Element | string => {
    if (!searchValue) return str;

    if (type === optionType) {
      const i = str.toLowerCase().indexOf(searchValue);
      const start = str.slice(0, i);
      const requiredValue = str.slice(i, i + searchValue.length);
      const end = str.slice(i + searchValue.length);
      return (
        <>
          {start}
          <b>{requiredValue}</b>
          {end}
        </>
      );
    }

    return str
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


  return (
    <div className="App">
      <Navbar
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setValue={setSearchValue}
        searchValue={searchValue}
        optionType={optionType}
        setOptionType={setOptionType}
      />
      <Users
        isModalConfirm={isModalConfirm}
        setIsModalConfirm={setIsModalConfirm}
        users={getFiltredUsers(users, searchValue)}
        removeUser={removeUser}
        getSelectionText={getSelectionText}
        selectIdUser={selectIdUser}
      />
      {modalVisible && (
        <MyModal setModalVisible={setModalVisible} addUser={addUser} />
      )}
      {isModalConfirm && (
        <ConfirmModal
          isModalConfirm={isModalConfirm}
          setIsModalConfirm={setIsModalConfirm}
          removeUsers={removeUsers}
        />
      )}
    </div>
  );
};

export default App;
