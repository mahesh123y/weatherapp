import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("indore");
  const fun = (e) => {
    setCity(e.target.value);
  };
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e2750f911d5408cda681ee0d3364d0fc`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result.main);
      setData(result.main);
    };
    fetchApi();
  }, [city]);
  return (
    <>
      <div className="bg-green-900 w-full flex flex-col items-center justify-center py-10">
        <input
          type="text"
          className="bg-black text-white text-3xl text-center px-3 pt-4 pb-2 rounded-[2rem]"
          onChange={fun}
        />
        {!data ? (
          <div className="text-[3rem] font-bold text-white">
            <h1>data not found</h1>
          </div>
        ) : (
          <div className="text-[3rem] font-bold text-white">
            <h1>Temperature : {data.temp}</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
