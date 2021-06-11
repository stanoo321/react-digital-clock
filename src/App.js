import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [Ctime, setCtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <h1>
        <span className="center">{time}</span>
      </h1>
    </>
  );
};

export default App;
