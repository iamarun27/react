import React from "react";

const Card = (props) => {
  return (
    <div className="bg- text-red rounded-xl overflow-hidden shadow-lg w-80 border border-zinc-700 card">
      
      {/* Cover Image */}
      <img
        src={props.coverImage}
        alt="cover"
        className="w-full h-40 object-cover"
      />

      {/* Profile Section */}
      <div className="px-5 py-4">
        <div className="flex items-center gap-4">
          <img
            src={props.profile}
            alt={props.fullName}
            className="w-16 h-16 rounded-full object-cover border-2 border-white"
          />

          <div>
            <h2 className="text-xl font-bold">{props.fullName}</h2>
            <p className="text-zinc-400">{props.title}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between mt-5 text-center">
          <div>
            <h3 className="font-bold">{props.likeCount}</h3>
            <p className="text-sm text-zinc-400">Likes</p>
          </div>

          <div>
            <h3 className="font-bold">{props.postCount}</h3>
            <p className="text-sm text-zinc-400">Posts</p>
          </div>

          <div>
            <h3 className="font-bold">{props.viewsCount}</h3>
            <p className="text-sm text-zinc-400">Views</p>
          </div>
        </div>

        {/* Follow Button */}
        <button
          className={`mt-5 w-full py-2 rounded-lg font-semibold ${
            props.followed
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {props.followed ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default Card;