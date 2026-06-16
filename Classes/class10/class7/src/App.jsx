import React, { useReducer, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userDesc, setUserDesc] = useState("");

  const localData = JSON.parse(localStorage.getItem("all-users")) || [];

  // localStorage.clear();

  // console.log(localData);

  const [allUsers, setAllUsers] = useState(localData);

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];

    const conf = confirm("Are u really want to delete this element ?");

    if (conf) copyUsers.splice(idx, 1);
    else alert("Element not deleted");
    setAllUsers(copyUsers);
    localStorage.setItem("all-users", JSON.stringify(copyUsers));

    // console.log(copyUsers)

    // console.log("Deleted")
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const oldUsers = [...allUsers];
    oldUsers.push({ userName, userRole, userDesc, imageUrl });
    setAllUsers(oldUsers);

    localStorage.setItem("all-users", JSON.stringify(oldUsers));

    // console.log(oldUsers);
    // console.log(userName,userRole,imageUrl,userDesc);
    setUserName("");
    setUserRole("");
    setImageUrl("");
    setUserDesc("");
  };
  return (
    <div className=" h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap p-2 justify-center"
      >
        <input
          required
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className=" font-bold text-xl border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          required
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          className=" font-bold text-xl border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Image URL"
        />
        <input
          required
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className=" font-bold text-xl border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Role"
        />
        <input
          required
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
          className=" font-bold text-xl border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
        />

        <button className=" bg-emerald-700 active:scale-95 border-2 px-5 py-2 rounded m-2 w-full ">
          Create User
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {allUsers.map((elem, idx) => {
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />;
        })}

        {/* <div className="lg:w-23vw md:w-30vw sm:w-45vw lg:bg-green-400 md:bg-blue-500 sm:bg-red-500  h-80 bg-white text-black rounded-xl p-5 px-8 text-center flex flex-col items-center">
          <img
            className="h-24 w-24 rounded-full"
            src="https://images.unsplash.com/photo-1778532747969-0bbb4c9b5151?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1 className="text-2xl mt-2 font-semibold">Arun Kumar</h1>
          <h5 className="text-base text-blue-500 font-semibold my-3 ">
            Developer
          </h5>
          <p className="text-sm font-medium leading-tight ">
            Lorem ipsum dolor sit amet.
          </p>
          <button className="px-4 py-2 rounded bg-red-500 text-white font-semibold text-xs cursor-pointer active:scale-80 mt-5">
            Remove
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default App;
