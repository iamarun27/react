import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Footer</h3>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Explore now
      </button>
    </div>
  );
};

export default Footer;
