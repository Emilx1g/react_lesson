import React, { useState, useEffect } from "react";

const EditUser = ({ id, users, onUpdate }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    const userToEdit = users.find((user) => user.id === id);

    if (userToEdit) {
      setName(userToEdit.name);
      setSurname(userToEdit.surname);
    }
  }, [id, users]);

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleSurnameChange = (newSurname) => {
    setSurname(newSurname);
  };

  const handleSave = () => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, name, surname };
      }
      return user;
    });

    onUpdate(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}
      />
      <input
        type="text"
        value={surname}
        onChange={(e) => handleSurnameChange(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditUser;
