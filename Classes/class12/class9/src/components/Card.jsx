import React from "react";

const Card = (props) => {
  const clr1 = Math.floor(Math.random() * 256);
  const clr2 = Math.floor(Math.random() * 256);
  const clr3 = Math.floor(Math.random() * 256);
  return (
    <div
      style={{ background: `rgb(${clr1},${clr2},${clr3})` }}
      className="user-card"
    >
      <h2>{props.elem.name}</h2>
      <h4>{props.elem.website}</h4>
    </div>
  );
};

export default Card;
