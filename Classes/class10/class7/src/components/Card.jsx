import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="lg:w-23vw md:w-30vw sm:w-45vw h-80 bg-white text-black rounded-xl p-5 px-8 text-center flex flex-col items-center">
        <img
          className="h-24 w-24 rounded-full object-center object-cover"
          src={props.elem.imageUrl}
          alt=""
        />
        <h1 className="text-2xl mt-2 font-semibold">{props.elem.userName}</h1>
        <h5 className="text-base text-blue-500 font-semibold my-3 ">
          {props.elem.userRole}
        </h5>
        <p className="text-sm font-medium leading-tight ">
          {props.elem.userDesc}
        </p>
        <button
          onClick={() => {
            props.deleteHandler(props.idx);
          }}
          className="px-4 py-2 rounded bg-red-500 text-white font-semibold text-xs cursor-pointer active:scale-80 mt-5"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
