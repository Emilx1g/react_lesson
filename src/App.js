import React, { useState } from "react";
const arr = [];
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, surname, age } = formData;
    const inputsObject = {
      name,
      surname,
      age,
    };
    arr.push(inputsObject);
    console.log(arr);
    setFormData({
      name: "",
      surname: "",
      age: "",
    });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="surname"
        placeholder="Surname"
        value={formData.surname}
        onChange={handleChange}
      />
      <input
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
