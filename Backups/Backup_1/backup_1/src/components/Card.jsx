import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item, idx) => {
        return (
          <div key={idx} className="card">
            <img src={item.url} alt="" />
            <h1>{item.name}</h1>
            <p>{item.age}</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              exercitationem.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
