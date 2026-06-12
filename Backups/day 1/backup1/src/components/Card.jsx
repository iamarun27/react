import React from "react";

const Card = ({data}) => {
  //console.log(data);
  // console.log(a)
  return (
    <div>
      <div className="card">
        <img
          className="image"
          src={data.url}
          alt=""
        />
        <h1>{data.name}</h1>
        <p>{data.age}</p>
        
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
          ullam!
        </p>
      </div>
    </div>
  );
};

export default Card;
