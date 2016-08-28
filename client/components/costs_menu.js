import React from "react";

const RatesMenu = () => {
  return (
  <div>
    <table>
      <tr className="header">
        <td><span className="glyphicon glyphicon-menu-hamburger"></span>  Upfront Costs</td>
        <td><span className="supersmall pull-right glyphicon glyphicon-check">Use Defaults</span></td>
      </tr>
      <tr>
        <td>Non Ice Chiller Cost</td>
        <td>
          <div className="input-group">
            <span className="input-group-addon">$</span>
              <span className="form-control work-in-progress" aria-label="Amount (to the nearest dollar)">500</span>
              <span className="input-group-addon">/ton</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>Ice-Making Chiller Cost</td>
        <td>
          <div className="input-group">
            <span className="input-group-addon">$</span>
              <span className="form-control work-in-progress" aria-label="Amount (to the nearest dollar)">550</span>
              <span className="input-group-addon">/ton</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>Cost per IceBank tank</td>
        <td>
          <div className="input-group">
            <span className="input-group-addon">$</span>
              <span className="form-control work-in-progress" aria-label="Amount (to the nearest dollar)">14,000</span>
              <span className="input-group-addon">/tank</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>Cost for Plate-Frame HX</td>
        <td>
          <div className="input-group">
            <span className="input-group-addon">$</span>
              <span className="form-control work-in-progress" aria-label="Amount (to the nearest dollar)">100</span>
              <span className="input-group-addon">/ton</span>
          </div>
        </td>
      </tr>
      <tr>
        <td>Rebate</td>
        <td>
          <div className="input-group">
            <span className="input-group-addon">$</span>
              <span className="form-control work-in-progress" aria-label="Amount (to the nearest dollar)">600</span>
              <span className="input-group-addon">/ton</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
  );
};

export default RatesMenu;
