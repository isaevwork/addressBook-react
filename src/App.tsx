import { useEffect, useState } from "react";
import Users from "./components/Users/Users";
import { User } from "./types/types";

import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import MyModal from "./components/MyModal/MyModal";

const App = () => {
  const [users, setUsers] = useState<User[]>([]); 
  // const [filterValue, setFilterValue] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const removeUser = (id: number) => {
    const updatingUsersList = users.filter((user) => user.id !== id);
    setUsers(updatingUsersList); // fix
  };

  const getFiltredUsers = (users: User[], searchValue: string) => {
    return users.filter( user => user.name.includes(searchValue));
  }

  return (
    <div className="App">
      <Navbar
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        setValue={setSearchValue}
      />
      <Users users={getFiltredUsers(users, searchValue)} removeUser={removeUser} />
      {modalVisible && ( // fix
        <MyModal
          setModalVisible={setModalVisible}
        />
      )}
    </div>
  );
};

export default App;
