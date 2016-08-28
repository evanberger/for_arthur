import React from "react";

const EconomicsMenu = () => {
  return (
  <div>
    <table>
        <tr className="header">
          <td><span className="glyphicon glyphicon-menu-hamburger"></span>  Economics Inputs</td>
          <td><span className="supersmall pull-right glyphicon glyphicon-check">Use Defaults</span></td>
        </tr>
        <tr>
         <td>Months of Cooling</td>
         <td>
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              10
              <span className="caret"></span>
             </button>
          <ul className="dropdown-menu" role="menu">
             <li><a href = "#">4</a></li>
             <li><a href = "#">5</a></li>
             <li><a href = "#">6</a></li>
             <li><a href = "#">7</a></li>
             <li><a href = "#">8</a></li>
             <li><a href = "#">9</a></li>
             <li><a href = "#">10</a></li>
             <li><a href = "#">11</a></li>
             <li><a href = "#">12</a></li>
          </ul>
         </div>
       </td>
      </tr>
      <tr>
        <td>Savings from downsizing pipes</td>
        <td>
          <div className="input-group">
            <span className="input-group-addon">$</span>
            <span className="form-control" aria-label="Amount (to the nearest dollar)"></span>
            <span className="input-group-addon">/ton</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>Savings from downsizing ducts</td>
        <td>
          <div className="input-group">
            <span className="input-group-addon">$</span>
            <span className="form-control" aria-label="Amount (to the nearest dollar)"></span>
            <span className="input-group-addon">/ton</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>Savings from round ductwork</td>
        <td>
          <div className="input-group">
            <span className="input-group-addon">$</span>
            <span className="form-control" aria-label="Amount (to the nearest dollar)"></span>
            <span className="input-group-addon">/ton</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
  );
};

export default EconomicsMenu;
