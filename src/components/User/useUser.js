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

  useEffect(() => {
    // Update the local storage whenever `usersFromStorage` changes
    const usersFromStorageJSON = JSON.stringify(usersFromStorage);
    localStorage.setItem("users", usersFromStorageJSON);
  }, [usersFromStorage]);

  const isInStorage = usersFromStorage.find((u) => u.id === user.id);

  const saveUser = () => {
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);
      const existingUserIndex = users.findIndex((u) => u.id === user.id);
      if (existingUserIndex !== -1) {
        // User already exists, update the existing user
        users[existingUserIndex] = user;
      } else {
        // User doesn't exist, add the new user
        users.push(user);
      }
    } else {
      // No users in local storage, add the new user
      users = [user];
    }

    users = JSON.stringify(users);
    localStorage.setItem("users", users);

    getUsersFromStorage();
  };

  const deleteUser = () => {
    const updatedUsers = usersFromStorage.filter((u) => u.id !== user.id);

    const updatedUsersJSON = JSON.stringify(updatedUsers);
    localStorage.setItem("users", updatedUsersJSON);

    getUsersFromStorage();
  };

  return {
    saveUser,
    deleteUser,
    isInStorage,
  };
};

export default useUser;
