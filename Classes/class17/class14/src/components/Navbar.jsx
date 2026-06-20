import React from "react";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext";

const Navbar = (props) => {
  // console.log(props.children)
  const data = useContext(userDataContext)
  console.log(data)
  return (
    <div className="h-10 w-full bg-emerald-800">
      <h1>This is Navbar {data}</h1>
      {/* {props.children} */}
    </div>
  );
};

export default Navbar;
