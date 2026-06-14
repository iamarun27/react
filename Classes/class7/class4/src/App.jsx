import React from "react";
import Navbar from "./components/Navbar";
import Men from "./components/Men";
import Women from "./components/Women";

const App = () => {
  const user1 = {
    name: "Arun",
    age: 20,
    gender: "Male",
  };

  const user2 = {
    name: "Shreya",
    age: 25,
    gender: "Female",
  };

  const user3 = {
    name: "Bixi",
    age: 5,
    gender: "Male",
  };
  return (
    <div>
      <Navbar
        color="red"
        title="Sheryians"
        links={["Home", "About", "Account", "Contact"]}
      />
      <Navbar
        color="blue"
        title="Arun"
        links={["Home", "About", "Product", "Contact"]}
      />
      <Navbar
        color="green"
        title="Aman"
        links={["Home", "About", "Account", "Services"]}
      />

      {user3.gender === "Male" ? user3.age > 10?<Men/> : <Women/> : <Women />}

      {/* <Men />
      <Women /> */}
    </div>
  );
};

export default App;
