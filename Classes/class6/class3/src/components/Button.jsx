import React from "react";

const Button = (props) => {
  //console.log(props);
  return (
    <div className="bg-emerald-700 px-4 py-2 rounded-md text-white w-fit font-bold text-2xl active:scale-95 m-5">
      <button>{props.text}</button>
    </div>
  );
};

export default Button;
