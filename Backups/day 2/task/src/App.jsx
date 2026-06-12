import React from "react";

const App = () => {
  return (
    <div className="p-5">
      <div className="card w-60 h-60 bg-zinc-600 rounded-md ">
        <img
          src="https://images.unsplash.com/photo-1781084819510-d401a1e77a7c?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1>Arun Kumar</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button>Like</button>
        <button>Dislike</button>
      </div>
    </div>
  );
};

export default App;
