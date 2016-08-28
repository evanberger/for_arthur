import React from "react";

const ChillerMenu = () => {
  return (
  <div>
    <table>
      <tr className="header">
        <td><span className="glyphicon glyphicon-menu-hamburger"></span> Chiller Options</td>
        <td><span className="supersmall pull-right glyphicon glyphicon-check">Use Defaults</span></td>
      </tr>
      <tr>
        <td>Peak Cooling Load:</td>
        <td className="work-in-progress">Calculated value...</td>
      </tr>
      <tr>
        <td>Air-Cooled or Water-Cooled Chiller</td>
        <td>
          <div className="dropdown">
            <select>
              <option value="Air-Cooled">Air-Cooled</option>
              <option value="Water-Cooled">Water-Cooled</option>
            </select>
          </div>
        </td>
      </tr>
      <tr>
        <td>Chiller tonnage</td>
        <td>
            <div className="input-group">
                <span className="form-control work-in-progress">Number input...</span>
                <span className="input-group-addon" id="basic-addon2">tons</span>
            </div>
         </td>
      </tr>
      <tr>
        <td>Chiller Efficiency, standard chiller</td>
        <td>
            <div className="input-group">
                <span className="form-control work-in-progress" aria-describedby="basic-addon2">1.10</span>
                <span className="input-group-addon" id="basic-addon2">kW/ton</span>
            </div>
        </td>
      </tr>
      <tr>
        <td>Dual-Duty Cooling Chiller Efficiency</td>
        <td>
            <div className="input-group">
                <span className="form-control work-in-progress" aria-describedby="basic-addon2">1.15</span>
                <span className="input-group-addon" id="basic-addon2">kW/ton</span>
            </div>
        </td>
      </tr>
      <tr>
        <td>Dual-Duty Ice-Making Efficiency</td>
        <td>
            <div className="input-group">
                <span className="form-control work-in-progress" aria-describedby="basic-addon2">1.20</span>
                <span className="input-group-addon" id="basic-addon2">kW/ton</span>
            </div>
        </td>
      </tr>
    </table>
  </div>
  );
};

export default ChillerMenu;
