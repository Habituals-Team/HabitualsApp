import React from "react";

const InfoPage = () => {
  // This is where you use forloops to make boxes

  // make boxes to appear on page when linking
  let boxesArray = [];
  for (let i = 0; i < 6; i++) {
    boxesArray.push(<div className="infoForm">InfoForm {i}</div>);
  }
  return (
    <div>
      <h1>This is coming from InfoPage</h1>
      {boxesArray}
    </div>
  );
};

export default InfoPage;
