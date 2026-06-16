import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1597211325684-d3711a8b5538?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div>
        <h1>John Doe</h1>
        <h4>a@gmail.com</h4>
        <h3>Developer</h3>
      </div>
    </div>
  );
};

export default Card;
