import React from "react";

const InputForm = () => {
  // This is where you use forloops to make boxes

  // make boxes to appear on page when linking
  let boxesArray = [];
  for (let i = 0; i < 6; i++) {
    boxesArray.push(<div className="boxes">THIS IS BOXES {i}</div>);
  }
  return (
    <div>
      <h1>This is coming from Boxes</h1>
      {boxesArray}
    </div>
  );
};

export default InputForm;