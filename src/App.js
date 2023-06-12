import { useState } from "react";
import { isEmpty, getYear, hasMinWordCount } from "./helpers.js";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const resetInputValues = () => {
    setName("");
    setSurname("");
    setAge("");
    setError("");
  };
  const isValid = () => {
    if (isEmpty(name) || isEmpty(surname)) {
      setError("Name and surname are required.");
      return false;
    } else if (hasMinWordCount(name, 3)) {
      setError("Name must be at least 3 characters long.");
      return false;
    } else if (hasMinWordCount(surname, 5)) {
      setError("surname must be at least 5 characters long.");
      return false;
    } else if (age < 18) {
      setError("Age must be over 18");
      return false;
    } else if (age > 100) {
      setError("Age must be under 100");
      return false;
    }
    return true;
  };

  const onSave = () => {
    if (isValid()) {
      const newUser = {
        name,
        surname,
        year: getYear(age),
      };

      setUsers([...users, newUser]);
      resetInputValues();
    }
  };

  return (
    <div>
      <input
        style={{ marginRight: 4 }}
        value={name}
        onChange={handleChangeName}
      />
      <input
        style={{ marginRight: 4 }}
        value={surname}
        onChange={handleChangeSurname}
      />
      <input
        style={{ marginRight: 4 }}
        value={age}
        onChange={handleChangeAge}
      />

      <button onClick={onSave}>Save</button>

      <p style={{ color: "red" }}>{error}</p>

      <br />

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>

        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.year}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default App;
