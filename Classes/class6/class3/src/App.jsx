import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  const users = ["Arun", "Aman", "Bixi", "Chetan"];
  return (
    <div className="p-10 h-screen text-yellow-600 bg-black">
      <Card user="Arun" age={20} />

      {users.map((elem) => {
        return <Card user={elem} />;
      })}

      <Button text="Download" />
      <Button text="Explore Courses" />
    </div>
  );
};

export default App;
