import React from "react";
import Card from "./components/Card";

const App = () => {
  const users = [
    {
      fullName: "Peter Parker",
      title: "Friendly Neighborhood Spider-Man",
      profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      coverImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      likeCount: 12500,
      postCount: 145,
      viewsCount: 350000,
      followed: true,
    },
    {
      fullName: "Bruce Wayne",
      title: "The Dark Knight",
      profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      coverImage:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
      likeCount: 18200,
      postCount: 210,
      viewsCount: 520000,
      followed: false,
    },
    {
      fullName: "Clark Kent",
      title: "Man of Steel",
      profile: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
      coverImage:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      likeCount: 22000,
      postCount: 175,
      viewsCount: 710000,
      followed: true,
    },
    {
      fullName: "Diana Prince",
      title: "Wonder Woman",
      profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      coverImage:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      likeCount: 19500,
      postCount: 168,
      viewsCount: 610000,
      followed: false,
    },
    {
      fullName: "Barry Allen",
      title: "The Flash",
      profile: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
      coverImage:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      likeCount: 14300,
      postCount: 132,
      viewsCount: 430000,
      followed: true,
    },
    {
      fullName: "Hal Jordan",
      title: "Green Lantern",
      profile: "https://images.unsplash.com/photo-1502767089025-6572583495b4",
      coverImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      likeCount: 11700,
      postCount: 120,
      viewsCount: 320000,
      followed: false,
    },
    {
      fullName: "Tony Stark",
      title: "Iron Man",
      profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      coverImage:
        "https://images.unsplash.com/photo-1511300636408-a63a89df3482",
      likeCount: 28400,
      postCount: 245,
      viewsCount: 950000,
      followed: true,
    },
    {
      fullName: "Steve Rogers",
      title: "Captain America",
      profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      coverImage:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      likeCount: 17500,
      postCount: 188,
      viewsCount: 560000,
      followed: false,
    },
    {
      fullName: "Natasha Romanoff",
      title: "Black Widow",
      profile: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
      coverImage:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      likeCount: 16200,
      postCount: 157,
      viewsCount: 470000,
      followed: true,
    },
    {
      fullName: "Thor Odinson",
      title: "God of Thunder",
      profile: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
      coverImage:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      likeCount: 23900,
      postCount: 201,
      viewsCount: 820000,
      followed: false,
    },
  ];
  return (
    <div className="bg-black text-white h-screen">
      {/* {users.map((elem,index) => {
        return <Card user={elem} />;
      })} */}
      {users.map((elem, index) => (
        <Card key={index} {...elem} />
      ))}
    </div>
  );
};

export default App;
