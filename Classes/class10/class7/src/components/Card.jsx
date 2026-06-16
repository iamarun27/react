// import React from "react";

// const Card = (props) => {
//   return (
//     <div>
//       <div className="w-45vw h-80 bg-white text-black rounded-xl p-5 px-8 text-center flex flex-col items-center">
//         <img
//           className="h-24 w-24 rounded-full object-center object-cover"
//           src={props.elem.imageUrl}
//           alt=""
//         />
//         <h1 className="text-2xl mt-2 font-semibold">{props.elem.userName}</h1>
//         <h5 className="text-base text-blue-500 font-semibold my-3 ">
//           {props.elem.userRole}
//         </h5>
//         <p className="text-sm font-medium leading-tight ">
//           {props.elem.userDesc}
//         </p>
//         <button
//           onClick={() => {
//             props.deleteHandler(props.idx);
//           }}
//           className="px-4 py-2 rounded bg-red-500 text-white font-semibold text-xs cursor-pointer active:scale-80 mt-5"
//         >
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from "react";

const Card = (props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white text-black rounded-xl p-5 sm:p-6 md:p-8 text-center flex flex-col items-center shadow-lg">
        <img
          className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover"
          src={props.elem.imageUrl}
          alt=""
        />

        <h1 className="text-xl sm:text-2xl mt-3 font-semibold">
          {props.elem.userName}
        </h1>

        <h5 className="text-sm sm:text-base text-blue-500 font-semibold my-3">
          {props.elem.userRole}
        </h5>

        <p className="text-xs sm:text-sm font-medium leading-relaxed">
          {props.elem.userDesc}
        </p>

        <button
          onClick={() => {
            props.deleteHandler(props.idx);
          }}
          className="px-4 py-2 rounded bg-red-500 text-white font-semibold text-xs sm:text-sm cursor-pointer active:scale-95 mt-5 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
