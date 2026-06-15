import React, { useState } from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(name);
    const newAllUsers = [...allUsers];
    newAllUsers.push(name);

    console.log(newAllUsers);
    setAllUsers(newAllUsers);
    setName("");
  };

  const [name, setName] = useState("");

  const [allUsers, setAllUsers] = useState([]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          required
          onChange={(e) => {
            // console.log(e.target.value);
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="enter your name..."
        />
        <button>Submit</button>
      </form>

      {allUsers.map((elem, idx) => {
        return <h1 key={idx}>{elem}</h1>;
      })}
    </div>
  );
};

export default App;
