import React, { useState, useEffect } from "react";
import Child from "./childComponent";

const Parent = () => {
  const [percent, setPercent] = useState(0);
  const [input, setInput] = useState(0);

  const handleMark = () => {
    if (input === "") {
      alert("Input something first");
    } else if (input > 100 || input < 0) {
      alert("Stick to the numerical limitation");
      setPercent(0);
    } else {
      setPercent(input);
    }
  };

  const changePercentByClickingStars = rate => {
    setInput(rate * 10);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}
    >
      <span>Input rating from 0 to 100.</span>
      <div>
        <input
          type="number"
          min="0"
          max="100"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        %
        <button style={{ marginLeft: "1em" }} onClick={handleMark}>
          Mark
        </button>
      </div>
      <Child
        percent={percent}
        changePercentByClickingStars={changePercentByClickingStars}
      />
    </div>
  );
};

export default Parent;
