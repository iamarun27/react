import React from "react";
import Card from "./components/Card";

const App = () => {
  const cardData = {
    name: "Arun",
    role: "Engineer",
    email: "a@gmail.com",
    profile:
      "https://images.unsplash.com/photo-1597211325684-d3711a8b5538?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    <>
      <Card cardData={cardData} />
    </>
  );
};

export default App;
