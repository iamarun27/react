import React from "react";

const Card = (props) => {
  //console.log(props);
  return (
    <div className="bg-white m-4 border-5 border-green-900 rounded px-5 py-3 w-fit flex justify-center items-center ">
      <h1 className="text-2xl font-semibold">
        {props.user}
        </h1>
    </div>
  );
};

export default Card;
