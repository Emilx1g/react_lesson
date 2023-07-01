import React, { useState, useEffect } from "react";
import Users from "../Users/Users";
import EditUser from "../EditUser/EditUser";

const useUsers = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersData = localStorage.getItem("users");
    setUsers(JSON.parse(usersData) || []);
  }, []);

  const handleUserClick = (id) => {
    setSelectedUserId(id);
  };

  const handleUserUpdate = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <Users users={users} onUserClick={handleUserClick} />

      {selectedUserId && (
        <EditUser
          id={selectedUserId}
          users={users}
          onUpdate={handleUserUpdate}
        />
      )}
    </div>
  );
};

export default useUsers;
