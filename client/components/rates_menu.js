import React from "react";

const RatesMenu = () => {
  return (
  <div>
    <table>
      <tr className="header">
        <td><span className="glyphicon glyphicon-menu-hamburger"></span>  Rates</td>
        <td></td>
      </tr>
      <tr>
        <td>Existing Rate (conventional chiller)</td>
        <td className="work-in-progress"><i>(Dropdown goes here..)</i></td>
      </tr>
      <tr>
        <td>Ice Storage (new/optimized rate)</td>
        <td className="work-in-progress"><i>(Dropdown goes here..)</i></td>
      </tr>
    </table>
  </div>
  );
};

export default RatesMenu;
