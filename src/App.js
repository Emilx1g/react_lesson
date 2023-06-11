import { useState } from "react";
import { ageToYear } from "./helpers.js";
const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onSave = () => {
    const newUser = {
      name,
      surname,
      age: ageToYear(age),
    };

    setName("");
    setSurname("");
    setAge("");
    if (name.length >= 3 && surname.length >= 4 && age <= 100) {
      setUsers([...users, newUser]);
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

      <br />
      <table border={1}>
        <thead>
          <tr>
            <td>name</td>
            <td>surname</td>
            <td>age</td>
          </tr>
        </thead>
        {users.map((user) => {
          return (
            <>
              <tr>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.age}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default App;
