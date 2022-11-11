import React, { useState } from "react";

function App() {
  var time = new Date().toLocaleTimeString([], { hour12: false });
  const [time1, updateTime1] = useState(time);
  // console.log(time);
  function updateTime() {
    return updateTime1(new Date().toLocaleTimeString([], { hour12: false }));
  }
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{time1}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
