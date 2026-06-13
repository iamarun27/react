import React from "react";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  const [postData, setPostData] = useState([
    {
      id: 1,
      name: "Arun",
      desc: "Web Developer",
      likeCount: 0,
    },
    {
      id: 2,
      name: "Aman",
      desc: "Farmer",
      likeCount: 0,
    },
  ]);

  const like = (id) => {
    //console.log(id);

    // prev state
    setPostData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likeCount: item.likeCount + 1 } : item,
      ),
    );
  };

  const disLike = (id) => {
    setPostData((prev) =>
      prev.map((item) =>
        item.id === id && item.likeCount >= 1
          ? { ...item, likeCount: item.likeCount - 1 }
          : item,
      ),
    );
  };

  return (
    <div className="px-10 py-5">
      <Card postData={postData} like={like} disLike={disLike} />
    </div>
  );
};

export default App;
