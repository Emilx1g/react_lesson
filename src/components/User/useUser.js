import { useEffect, useState } from "react";

const useUser = (props) => {
  const { user } = props;
  const [usersFromStorage, setUsersFromStorage] = useState([]);
  console.log("render");

  const getUsersFromStorage = () => {
    const usersDataJSON = localStorage.getItem("users") || "[]";
    const usersData = JSON.parse(usersDataJSON);
    setUsersFromStorage(usersData);
  };

  useEffect(() => {
    getUsersFromStorage();
  }, []);

  const isInStorage = usersFromStorage.find((u) => u.id === user.id);

  const saveUser = () => {
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);
      users.push(user);
    } else {
      users = [user];
    }

    users = JSON.stringify(users);
    localStorage.setItem("users", users);

    getUsersFromStorage();
  };

  const deleteUser = () => {
    getUsersFromStorage();
    const deletedUserIndex = usersFromStorage.findIndex(
      (u) => u.id === user.id
    );
    let storageUser = usersFromStorage;
    storageUser.splice(deletedUserIndex, 1);

    const usersFromStorageJSON = JSON.stringify(storageUser);
    localStorage.setItem("users", usersFromStorageJSON);
  };

  return {
    saveUser,
    deleteUser,
    isInStorage,
  };
};

export default useUser;
