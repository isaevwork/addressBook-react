// import "./App.css";
// import { useEffect, useState } from "react";

// type User = {
//   email: string;
//   id: number;
//   name: string;
//   phone: number;
//   username: string;
//   website: string;
// };

// type OptionType = "email" | "name" | "phone";

// const optionList: OptionType[] = ["email", "name", "phone"];

// export default function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [value, setValue] = useState<string>("");
//   const [optionType, setOptionType] = useState<OptionType>("name");

//   const getUsers = (users: User[], searchValue: string): User[] => {
//     return users.filter((user) =>
//       String(user[optionType]).toLowerCase().includes(searchValue.toLowerCase())
//     );
//   };

//   const getBold = (str: string, searchValue: string) => {
//     if (!searchValue) return str;
//     const i = str.toLowerCase().indexOf(searchValue);
//     const part1 = str.slice(0, i);
//     const part2 = str.slice(i, i + searchValue.length);
//     const part3 = str.slice(i + searchValue.length);
//     return (
//       <>
//         {part1}
//         <b>{part2}</b>
//         {part3}
//       </>
//     );
//   };

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <main>
//       <div className="search">
//         <select
//           value={optionType}
//           onChange={(e) => setOptionType(e.target.value as OptionType)}
//         >
//           {optionList.map((option) => (
//             <option key={option}>{option}</option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Search name..."
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//       </div>

//       <ol>
//         {getUsers(users, value).map((user) => (
//           <li>
//             {getBold(user.name, value)},{user.phone},{user.email}
//           </li>
//         ))}
//       </ol>
//     </main>
//   );
// }

import { ChangeEvent, useEffect, useState } from "react";
import Users from "./components/Users/Users";
import { User } from "./types/types";

import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Mymodal from "./components/MyModal/Mymodal";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filterValue, setFilterValue] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const switchModal = () => {
    setModalSwitcher((prev) => !prev);
  };

  const filterUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    console.log(name);
  };

  const removeUser = (id: number) => {
    const updatingUsersList = users.filter((user) => user.id !== id);
    setFilterValue(updatingUsersList);
  };

  return (
    <div className="App">
      <Navbar
        filterValue={filterValue}
        filterUser={filterUser}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <Users users={users} removeUser={removeUser} />
      {modalVisible === true ? (
        <Mymodal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
