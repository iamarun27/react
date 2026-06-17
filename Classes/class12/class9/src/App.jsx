import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [allData, setAllData] = useState([]);
  async function getData() {
    const response = await axios.get(
      // "https://picsum.photos/v2/list?page=2&limit=100",
      //"https://picsum.photos/v2/list",
      // "https://picsum.photos/v2/list",
      "https://jsonplaceholder.typicode.com/users",
    );

    setAllData(response.data);
  }

  // getData();

  useEffect(function () {
    getData();
  },[]);

  //1 bar m pura load nhi krna pda
  // dependencies 1 time chlegaa

  // fnc ko call kne m help krta h

  return (
    <div>
      {/* <button onClick={getData}>Get Data</button> */}
      <div className="all-cards">
        {allData.map((elem, idx) => {
          // console.log(elem);
          return (
            <div key={idx}>
              <Card elem={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
