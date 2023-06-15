import { useState } from "react";
import { getYear, hasMinWordCount } from "./helpers.js";

const App = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const handleChangeName = (e) => {
    isValid();
    setName(e.target.value);
  };

  const handleChangeSurname = (e) => {
    isValid();
    setSurname(e.target.value);
  };

  const handleChangeAge = (e) => {
    isValid();
    setAge(e.target.value);
  };

  const resetInputValues = () => {
    setName("");
    setSurname("");
    setAge("");
    setError("");
  };
  // const setAndValidateName = (name) => {
  //   if (hasMinWordCount(name, 3)) {
  //     setError("Name must be at least 3 characters long.");
  //     setName(name);
  //   } else {
  //     setError("");
  //     setName(name);
  //   }
  // };
  // const setAndValidateSurname = (surname) => {
  //   if (hasMinWordCount(surname, 5)) {
  //     setError("Surname must be at least 5 characters long.");
  //     setSurname(surname);
  //   } else {
  //     if (error) {
  //       setError("");
  //     }
  //     setSurname(surname);
  //   }
  // };
  const setAndEmptyError = (boolean, errortxt) => {
    if (boolean && (errortxt === error || error === "")) {
      setError(errortxt);
    } else if (errortxt === error) {
      setError("");
    }
  };
  const isValid = () => {
    setAndEmptyError(
      hasMinWordCount(name, 3),
      "Name must be at least 3 characters long."
    );
    setAndEmptyError(
      hasMinWordCount(surname, 5),
      "Surname must be at least 5 characters long."
    );
    setAndEmptyError(age < 18, "Age must be between 18 and 100");
    setAndEmptyError(age > 100, "Age must be between 18 and 100");
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
