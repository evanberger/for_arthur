import React from "react";

const Header = () => {
  return (
    <header id="header">
      <h1>IceBank Analyzer Financial Model</h1>
      <div className="stripe">
        <button className="selected">Summary</button>
        <button id="utilityDisplay">Florida Power & Light</button>
        <button id="dd_chart">Design Day Profile</button>
        <button id="off_chart">Off-Peak Months Profile</button>
      </div>
    </header>
  );
};

export default Header;
