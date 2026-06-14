import React from "react";

const Navbar = (props) => {
  console.log(props.color);
  return (
    <div
      style={{ backgroundColor: props.color }}
      className=" mb-2 text-white px-8 py-3 flex items-center justify-between "
    >
      <h1 className="text-4xl text-bold">{props.title}</h1>
      <div className="flex gap-10 ">
        {/* <h4 className="text-sm">Home</h4>
        <h4 className="text-sm">Home</h4>
        <h4 className="text-sm">Home</h4>
        <h4 className="text-sm">Home</h4> */}

        {props.links.map((elem, idx) => {
          return <h4 key={idx}>{elem}</h4>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
