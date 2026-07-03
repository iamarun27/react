import React from "react";
import Card from "./components/Card";

const App = () => {
  const persons = [
    {
      id: 1,
      name: "Arun",
      age: 20,
      url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
     {
      id: 2,
      name: "Aman",
      age: 17,
      url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="app">
      {/* <Card a={20} name="Arun" />

      <Card a={17} name="Aman" /> */}

      <Card data={persons} status="followed" />
    </div>
  );
};

export default App;
