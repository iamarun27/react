import React from "react";
import Card from "./components/Card";

const App = () => {
  const persons = {
    id: 1,
    name: "Arun",
    age: 21,
    url: "https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  var a = 10;
  return (
    <div className="app">
      <h1>{a}</h1>
      
      <Card data={persons} status="follow" />
    </div>
  );
};

export default App;
